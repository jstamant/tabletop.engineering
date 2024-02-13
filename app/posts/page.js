import { getAllPosts } from '../../lib/api';

export default function Page() {
  // TODO need to get a list of the first 10 posts
  let allPosts = getAllPosts();
  allPosts = allPosts.map((post, idx) => <p key={idx}>{post.title}</p>);
  return (
    <>
      <h1>List of all posts:</h1>
      {allPosts}
    </>
  );
}
