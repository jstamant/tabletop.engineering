import PostCard from './postcard';

import { getAllPosts } from '../lib/api';

// TODO need to implement pagination

export default function PostList () {
  let allPosts = getAllPosts();
  return getAllPosts().map((post, idx) => <PostCard slug={post.slug} key={post.slug} />);
}
