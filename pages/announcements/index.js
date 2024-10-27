import Page from "@/components/Page";
import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import CardBody from "@/components/CardBody";
import CardHeading from "@/components/CardHeading";
import CardLink from "@/components/CardLink";

import loadMdx from "@/helpers/loadMdx";

import fs from "fs";
import path from "path";

export async function getStaticProps() {
  // Get all files in the '_posts' directory
  const g = "public/static/announcements";
  const announcementsPath = path.join(process.cwd(), g);
  const announcements = fs.readdirSync(announcementsPath);

  // announcements contains directories that contain content.mdx and, optionally, a thumbnail.jpg
  // Map each file to an object containing front matter and slug
  const posts = announcements.map((a) => {
    const curdir = path.join(announcementsPath, a);
    const content = path.join(curdir, "content.mdx");
    const thumbnail = path.join(curdir, "thumbnail.jpg");

    return {
      ...loadMdx(content),
      slug: path.parse(curdir).name,
      thumbnail: fs.existsSync(thumbnail),
    };
  });

  // sort posts by date
  posts.sort(
    (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
  );

  // Return the props object with the posts array
  return {
    props: {
      posts,
    },
  };
}

function Announcements({ posts }) {
  return (
    <Page isContent title="Announcements">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="mt-4">
            <Card className="h-full">
              {post.thumbnail && (
                <CardImage
                  src={`/static/announcements/${post.slug}/thumbnail.jpg`}
                  alt={post.frontMatter.title}
                />
              )}
              <CardBody>
                <CardHeading>
                  <h1 className="text-2xl font-bold">
                    {post.frontMatter.title}
                  </h1>
                  <span className="text-xs font-gray-500">
                    {post.frontMatter.date}
                  </span>
                </CardHeading>
                <p>{post.frontMatter.description}</p>

                <CardLink href={`/announcements/${post.slug}`} />
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Announcements;
