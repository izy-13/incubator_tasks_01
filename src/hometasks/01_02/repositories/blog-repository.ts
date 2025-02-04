import { Blog } from '@apiTypes/index';

const blogs: Blog[] = [{ id: '1', description: 'test 123', name: 'Blog #1', websiteUrl: 'www.google.com' }];

export const blogRepository = {
  findBlogs: () => blogs,

  findBlogById: (id: string) => blogs.find((blog) => blog.id === id),

  createBlog: (blog: Omit<Blog, 'id'>): Blog => {
    const newBlog: Blog = { id: Math.floor(Math.random() * 100000).toString(), ...blog };
    blogs.push(newBlog);
    return newBlog;
  },

  updateBlog: (id: string, blog: Partial<Blog>): boolean => {
    const blogIndex = blogs.findIndex((blog) => blog.id === id);

    if (blogIndex !== -1) {
      blogs[blogIndex] = { ...blogs[blogIndex], ...blog };
      return true;
    } else {
      return false;
    }
  },

  deleteBlog: (id: string): boolean => {
    const blogIndex = blogs.findIndex((blog) => blog.id === id);

    if (blogIndex !== -1) {
      blogs.splice(blogIndex, 1);
      return true;
    } else {
      return false;
    }
  },
};
