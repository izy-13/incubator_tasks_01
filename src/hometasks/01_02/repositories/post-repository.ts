import { Post } from '@apiTypes/index';

const posts: Post[] = [];

export const postRepository = {
  findPosts: (id?: number) => {
    console.log(id);
    return posts;
  },
};
