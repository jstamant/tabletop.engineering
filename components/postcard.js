import Link from 'next/link';

import { getPostBySlug } from '../lib/api';

export default function PostCard(params) {
  const post = getPostBySlug(params.slug);
  return (
    <article className="bg-neutral-200 my-4 p-4">
      <header className="font-bold">{post.title}</header>
      <p className="my-2">{post.summary}</p>
      <Link href={"/posts/" + post.slug}>Read more...</Link>
    </article>
  );
}
