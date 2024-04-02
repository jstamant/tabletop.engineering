import fs from 'fs';

import processMarkdownFile from './markdown';

const postsDirectory = process.cwd() + "/content";

/**
 * Returns a list of all posts, including their data, as fetched in
 * getPostBySlug()
 */
export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts;
}

// Returns a list of slugs without the `.md` extension
export function getPostSlugs() {
  const slugs = fs.readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
  return slugs;
}

/**
 * Takes a file name or slug, and returns all the associated post's
 * frontmatter (metadata), and content
 * @slug - string
 * @return - { frontmatter indexes, slug(string), content(react components) }
 */
export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = postsDirectory + `/${realSlug}.md`;
  const post = await processMarkdownFile(fullPath);
  return { ...post, slug: realSlug };
}
