import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { getPostSlugs, getPostBySlug } from '../../../lib/api';

// Populate the [slug] dynamic segment with all the posts' slugs
export function generateStaticParams() {
  return getPostSlugs().map((postSlug) => ({slug: postSlug}));
}

export default async function Page({ params }) {
  const {slug} = params;
  const post = getPostBySlug(slug);
  const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs};
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeReact, production)
    .process(post.content);
  return (
    <>
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.date.toString()}>{post.date.toString()}</time>
      </header>
      <article>{content.result}</article>
    </>
  );
}
