import Page from "@/components/Page";
import fs from 'fs'
import path from 'path'
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import CardBody from "@/components/CardBody";
import CardHeading from "@/components/CardHeading";

import loadMdx from "@/helpers/loadMdx";
import CardLink from "@/components/CardLink";

export async function getStaticProps() {
    // Get all files in the '_posts' directory
    const files = fs.readdirSync(path.join(process.cwd(), 'static', 'announcements'))

    // Map each file to an object containing front matter and slug
    const posts = files.map(loadMdx)

    // sort posts by date
    posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))

    // Return the props object with the posts array
    return {
        props: {
            posts: posts
        }
    }
}

function Announcements({ posts }) {
    return (
        <Page isContent>
            <h1 className="text-4xl font-bold">Announcements</h1>
            {posts.map((post, index) => (
                <div key={index} className="mt-4">
                    <Card>
                        {post.thumbnail &&
                            <CardImage src={post.thumbnail}
                                alt={post.frontMatter.title} />}
                        <CardBody>
                            <CardHeading>
                                <h1 className="text-2xl font-bold">
                                    {post.frontMatter.title}
                                </h1>
                                <span
                                    className="text-sm font-gray-500">{post.frontMatter.date}</span>
                            </CardHeading>
                            <p>{post.frontMatter.description}</p>

                            <CardLink href={`/announcements/${post.slug}`} />
                        </CardBody>
                    </Card>
                </div>
            ))}
        </Page>
    )
}

export default Announcements;
