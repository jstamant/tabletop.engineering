import { getPostSlugs, getPostBySlug } from '../../../utils/api';

// Populate the [slug] dynamic segment with all the posts' slugs
export function generateStaticParams() {
  return getPostSlugs().map((postSlug) => ({slug: postSlug}));
}

export default async function Page({ params }) {
  const {slug} = params;
  const post = await getPostBySlug(slug);
  return (
    <>
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.date.toString()}>{post.date.toString()}</time>
      </header>
      <article>{post.content}</article>
    </>
  );
}
