import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

import fs from 'fs';
import matter from 'gray-matter';

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
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
  const components = {
    blockquote: (props) => <blockquote className='pl-8 italic border-l-2 border-neutral-900'>{ props.children }</blockquote>,
    em: (props) => <em className='italic'>{ props.children }</em>,
    h1: (props) => <h1 className='my-2 text-2xl'>{ props.children }</h1>,
    h2: (props) => <h2 className='my-2 text-2xl'>{ props.children }</h2>,
    h3: (props) => <h3 className='my-2 text-2xl'>{ props.children }</h3>,
    h4: (props) => <h4 className='my-2 text-2xl'>{ props.children }</h4>,
    h5: (props) => <h5 className='my-2 text-2xl'>{ props.children }</h5>,
    h6: (props) => <h6 className='my-2 text-2xl'>{ props.children }</h6>,
    li: (props) => <li className='ml-8'>{ props.children }</li>,
    p: (props) => <p className='my-2'>{ props.children }</p>,
    strong: (props) => <strong className='font-bold'>{ props.children }</strong>,
    ul: (props) => <ul className='my-2 list-disc'>{ props.children }</ul>,
  };

  const react = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(rehypeReact, { ...production, components })
    .process(content);

  return { ...frontmatter, slug: realSlug, content: react.result };
}
