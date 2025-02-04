import { Post } from '@apiTypes/index';

const posts: Post[] = [
  {
    blogId: '11',
    blogName: 'Blog name',
    content: 'some content',
    id: '1',
    shortDescription: 'short desc',
    title: 'some title',
  },
];

export const postRepository = {
  findPosts: () => posts,

  findPostById: (id: string) => posts.find((post) => post.id === id),

  createPost: (post: Omit<Post, 'id'>): Post => {
    const newPost: Post = { id: Math.floor(Math.random() * 100000).toString(), ...post };
    posts.push(newPost);
    return newPost;
  },

  updatePost: (id: string, post: Partial<Post>): boolean => {
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      posts[postIndex] = { ...posts[postIndex], ...post };
      return true;
    } else {
      return false;
    }
  },

  deletePost: (id: string): boolean => {
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      return true;
    } else {
      return false;
    }
  },
};
