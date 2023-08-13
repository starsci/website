import Page from "@/components/Page";
import matter from "gray-matter";
import Link from "next/link";
import fs from 'fs'
import path from 'path'
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import CardBody from "@/components/CardBody";
import CardHeading from "@/components/CardHeading";

export async function getStaticProps() {
    // Get all files in the '_posts' directory
    const files = fs.readdirSync(path.join(process.cwd(), 'static', 'announcements'))
    console.log(files)

    // Map each file to an object containing front matter and slug
    const posts = files.map(filename => {
        // Read the contents of the file
        const mdWithFrontMatter = fs.readFileSync(path.join(process.cwd(), 'static', 'announcements', filename), 'utf-8')

        // Extract the front matter from the file contents
        const {data: frontMatter} = matter(mdWithFrontMatter)

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
            slug,
            thumbnail: thumbnail ? `/announcements/thumbnails/${thumbnail}` : null
        }
    })

    // sort posts by date
    posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))

    // Return the props object with the posts array
    return {
        props: {
            posts: posts
        }
    }
}

function Announcements({posts}) {
    return (
        <Page isContent>
            <h1 className="text-4xl font-bold">Announcements</h1>
            {posts.map((post, index) => (
                <div key={index} className="mt-4">
                    <Card>
                        {
                            post.thumbnail &&
                            <CardImage src={post.thumbnail}
                                       alt={post.frontMatter.title}/>
                        }
                        <CardBody>
                            <CardHeading>
                                <h1 className="text-2xl font-bold">
                                    <Link href={`/announcements/${post.slug}`}>
                                        {post.frontMatter.title}
                                    </Link>
                                </h1>
                                <span
                                    className="text-sm font-gray-500">{post.frontMatter.date}</span>
                            </CardHeading>
                            <p>{post.frontMatter.description}</p>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </Page>
    )
}

export default Announcements;
