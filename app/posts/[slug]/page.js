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

// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`
// export default function Page({ params }) {
//   const { slug } = params
//   // ...
// }

// TODO fix layout inheritance
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
    <main className="mx-auto w-11/12 md:w-2/3">
      <h1>post.title: {post.title}</h1>
      <article>{content.value}</article>
    </main>
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
