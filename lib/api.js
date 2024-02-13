import fs from 'fs';
// TODO replace gray-matter with remark-frontmatter
import matter from 'gray-matter'

const postsDirectory = process.cwd() + "/content";

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = postsDirectory + `/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  console.log(slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
