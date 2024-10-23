// https://github.com/payloadcms/payload/discussions/220#discussioncomment-976890

import path from 'path'
import streamifier from 'streamifier'
import {v2 as cloudinary} from 'cloudinary'
import {UploadApiResponse, UploadStream} from 'cloudinary'
import fs, {promises as Fs} from 'fs'
import {
  CollectionBeforeChangeHook as BeforeChangeHook,
  CollectionAfterChangeHook as AfterChangeHook,
  CollectionAfterDeleteHook as AfterDeleteHook
} from 'payload'

// Uploading file to cloudinary using streamifier
const streamUpload = (
  file: {data: Buffer},
  id?: string
): Promise<UploadApiResponse> => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const options = {
      invalidate: true,
      ...(id && {public_id: id}) // in case of updating the image, we will need the public_id
      // but not the folder as it's already in the URL and if we pass
      //the value then it will create file in sub-folder instead of updating.
    }
    const stream: UploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (result) {
          resolve(result)
        } else {
          reject(error)
        }
      }
    )
    streamifier.createReadStream(file.data).pipe(stream)
  })
}

const beforeChangeHook: BeforeChangeHook = async ({data, req, operation}) => {
  // DONE: get the file from the req, upload to cloudinary
  const uploadedFile = req.file
  if (uploadedFile) {
    const file = req.file
    const basename = file ? path.parse(file.name).name : undefined
    const result = await streamUpload(
      uploadedFile,
      operation === 'update' ? data.public_id : basename
    )
    data.public_id = result.public_id
    data.cdn_url = result.secure_url
  }
  return data
}

async function exists(filePath: string) {
  try {
    await Fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function deleteFile(filePath: string) {
  const fileExists = await exists(filePath)
  if (fileExists)
    fs.unlink(filePath, err => {
      if (err) {
        console.log(err)
        throw err
      }
    })
}

const afterChangeHook: AfterChangeHook = ({doc, operation}) => {
  // DONE: find the doc by the doc.filename on the hard drive of the server
  // if it exists, delete it
  if (doc?.filename) {
    const mainFilePath = path.resolve(
      __dirname + `../../../media/${doc.filename}`
    )
    deleteFile(mainFilePath)
  }
  // DONE: and all of its sizes(if any)
  if (doc?.sizes) {
    for (const imageName in doc.sizes) {
      const filePath = path.resolve(
        __dirname + `../../../media/${doc.sizes[imageName].filename}`
      )
      deleteFile(filePath)
    }
  }
  // I tried deleting the empty directory as well but it was creating some errors
  // while updating the operation so I left it, if there is any way we can do it without having errors then lmk

  return doc
}

const afterDeleteHook: AfterDeleteHook = ({doc}) => {
  // DONE: delete the files from Cloudinary using public_id obtained from cloudinary
  cloudinary.uploader.destroy(
    doc.public_id,
    function (result: any, error: any) {
      console.log(result, error)
    }
  )
  return doc
}

export {streamUpload, beforeChangeHook, /* afterChangeHook, */ afterDeleteHook}
