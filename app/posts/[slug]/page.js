import fs from 'fs'
// TODO replace gray-matter with remark-frontmatter
import matter from 'gray-matter'

import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

// Return a list of `params` to populate the [slug] dynamic segment
// TODO make this automatic, not manual
export function generateStaticParams() {
  const postList = [
    "can-you-dungeon-master-as-a-beginner",
    "how-to-get-player-feedback-in-dnd",
    "how-to-give-your-dm-feedback-in-dnd",
    "how-to-make-a-good-dmpc",
    "why-you-should-play-tabletop-rpgs"
  ];
  return postList.map((post) => ({slug: post}));
}

// // Multiple versions of this page will be statically generated
// // using the `params` returned by `generateStaticParams`
// export default function Page({ params }) {
//   const { slug } = params
//   // ...
// }

function getPostBySlug(slug) {
  console.log(slug);
  const realSlug = slug.replace(/\.md$/, "");
  console.log(realSlug);
  const postsDirectory = process.cwd() + "/content";
  const fullPath = postsDirectory + `/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, realSlug, content };
}

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
  console.log(content);
  
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
