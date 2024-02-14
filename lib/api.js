import fs from 'fs';
// TODO replace gray-matter with remark-frontmatter
import matter from 'gray-matter'

const postsDirectory = process.cwd() + "/content";

// Returns a list of slugs without the `.md` extension
export function getPostSlugs() {
  const slugs = fs.readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
  return slugs;
}

// Takes a file name or slug, and returns all the associated post's data
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = postsDirectory + `/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
