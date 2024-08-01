import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function loadMdx(filename) {
  // Read the contents of the file
  const mdWithFrontMatter = fs.readFileSync(filename, "utf-8");

  // Extract the front matter from the file contents
  const { data: frontMatter, content } = matter(mdWithFrontMatter);

  frontMatter.date = new Date(frontMatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    frontMatter,
    content
  };
}
