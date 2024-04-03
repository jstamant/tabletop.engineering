import { getPostSlugs, getPostBySlug } from '../../../utils/api';

// Populate the [slug] dynamic segment with all the posts' slugs
export function generateStaticParams() {
  return getPostSlugs().map((postSlug) => ({slug: postSlug}));
}

export default async function Page({ params }) {
  const {slug} = params;
  const post = await getPostBySlug(slug);
  const date = post.date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <article>
        <header>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <time dateTime={post.date.toString()}>{date}</time>
        </header>
        {post.content}
      </article>
    </>
  );
}
