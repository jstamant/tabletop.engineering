import PostCard from './postcard';

import { getAllPosts } from '../lib/api';

export default function PostList () {
  let allPosts = getAllPosts();
  // Sort by most recent
  allPosts.sort((a, b) => b.date - a.date);
  return allPosts.map((post, idx) => <PostCard slug={post.slug} key={post.slug} />);
}
