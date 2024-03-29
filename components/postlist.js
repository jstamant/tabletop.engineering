import PostCard from './postcard';

import { getAllPosts } from '../utils/api';

export default async function PostList () {
  let allPosts = await getAllPosts();
  // Sort by most recent
  allPosts.sort((a, b) => b.date - a.date);
  return allPosts.map((post) => <PostCard slug={post.slug} key={post.slug} />);
}
