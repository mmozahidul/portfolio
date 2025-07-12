import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

interface Post {
  slug: string;
  title: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // This uses Vite's glob import feature to get all markdown files
      const postFiles = import.meta.glob('/src/posts/*.md');

      const postsData = await Promise.all(
        Object.entries(postFiles).map(async ([path, resolver]) => {
          const postModule = await resolver() as { default: string };
          const { data } = matter(postModule.default);

          // Create a URL-friendly slug from the file path
          const slug = path.split('/').pop()?.replace('.md', '') || '';

          return {
            slug,
            title: data.title || 'Untitled Post',
            date: data.date ? new Date(data.date).toLocaleDateString() : 'No date',
          };
        })
      );

      // Sort posts by date, newest first
      postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading posts...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">My Blog</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;