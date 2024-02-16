import fs from 'fs'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

import { getPostSlugs, getPostBySlug } from '../../../lib/api';

// Populate the [slug] dynamic segment with all the posts' slugs
export function generateStaticParams() {
  return getPostSlugs().map((postSlug) => ({slug: postSlug}));
}

export default async function Page({ params }) {
  const {slug} = params;
  // or use params.slug
  const post = getPostBySlug(slug);
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(post.content);
  
  return (
    <>
      <h1>post.title: {post.title}</h1>
      <article>{content.value}</article>
    </>
  );
}
// return (
//   <main>
//     <Alert preview={post.preview} />
//     <Container>
//       <Header />
//       <article className="mb-32">
//         <PostHeader
//           title={post.title}
//           coverImage={post.coverImage}
//           date={post.date}
//           author={post.author}
//         />
//         <PostBody content={content} />
//       </article>
//     </Container>
//   </main>
// );
