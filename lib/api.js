import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = process.cwd() + "/content";

// Returns a list of slugs without the `.md` extension
export function getPostSlugs() {
  const slugs = fs.readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
  return slugs;
}

// Takes a file name or slug, and returns all the associated post's
// frontmatter, metadata, and content
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = postsDirectory + `/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  return { ...frontmatter, slug: realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug));
  return posts;
}
