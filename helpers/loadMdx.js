import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function loadMdx(filename) {
     // Read the contents of the file
     const mdWithFrontMatter = fs.readFileSync(path.join(process.cwd(), 'static', 'announcements', filename), 'utf-8')

     // Extract the front matter from the file contents
     const {data: frontMatter, content} = matter(mdWithFrontMatter)

     frontMatter.date = new Date(frontMatter.date).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
     })

     // Extract the slug from the filename
     const slug = filename.split('.')[0]

     // get first image with file name starting with slug from
     // static/announcements/thumbnails
     const files = fs.readdirSync(path.join(process.cwd(), 'public', 'announcements', 'thumbnails'))
     const thumbnail = files.find(filename => filename.startsWith(slug))

     return {
         frontMatter,
         content,
         slug,
         thumbnail: thumbnail ? `/announcements/thumbnails/${thumbnail}` : null
     }
}