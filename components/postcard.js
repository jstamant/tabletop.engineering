import Link from 'next/link';

import { getPostBySlug } from '../utils/api';

export default async function PostCard(params) {
  const post = await getPostBySlug(params.slug);
  const link = "/posts/" + post.slug;
  const datetime = <time dateTime={post.date.toISOString()}>{post.date.toDateString()}</time>
  return (
    <article className="bg-neutral-200 my-4 p-4">
      <header>
        <Link href={link} className="block font-bold hover:underline">{post.title}</Link>
        <p className="text-sm italic">Published {datetime}</p>
      </header>
      <p className="my-2">{post.summary}</p>
      <Link href={link} className="hover:underline text-sm">Read more...</Link>
    </article>
  );
}
