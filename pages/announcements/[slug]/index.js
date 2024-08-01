import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";

import Page from "@/components/Page";
import loadMdx from "@/helpers/loadMdx";

const announcementsPath = path.join(process.cwd(), "public", "static", "announcements");

export async function getStaticPaths() {
  const announcements = fs.readdirSync(announcementsPath);

  const paths = announcements.map((a) => {
    return {
      params: {
        slug: a,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { frontMatter, content } = loadMdx(path.join(announcementsPath, slug, "content.mdx"));
  const source = await serialize(content);

  return {
    props: {
      frontMatter,
      source,
    },
  };
}

function Announcement({ frontMatter: { title, date }, source }) {
  return (
    <Page isContent>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Released on {date}
      </p>
      <div className="mt-4 markdown-source">
        <MDXRemote {...source} />
      </div>
    </Page>
  );
}

export default Announcement;
