import PostCard from '../../components/postcard';

import { getAllPosts } from '../../lib/api';

export default function Page() {
  // TODO need to get a list of the first 10 posts
  let allPosts = getAllPosts();
  allPosts = allPosts.map((post, idx) => <PostCard slug={post.slug} key={post.slug} />);
  return (
    <>
      <header className="text-2xl font-bold my-4">Posts</header>
      {allPosts}
    </>
  );
}
