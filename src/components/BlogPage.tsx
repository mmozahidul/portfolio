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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });
        
        const postsData = await Promise.all(
          Object.entries(postFiles).map(async ([path, resolver]) => {
            const markdownContent = await resolver();
            const { data } = matter(markdownContent);
            
            const slug = path.split('/').pop()?.replace('.md', '') || '';

            return {
              slug,
              title: data.title || 'Untitled Post',
              date: data.date ? new Date(data.date).toISOString() : 'No date',
            };
          })
        );
        
        postsData.sort((a, b) => {
          const dateA = a.date !== 'No date' ? new Date(a.date).getTime() : 0;
          const dateB = b.date !== 'No date' ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        });

        setPosts(postsData);
      } catch (e) {
        console.error("Failed to fetch posts:", e);
        setError("Failed to load posts. Please check the browser console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
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
              <p className="text-gray-500 text-sm">{post.date !== 'No date' ? new Date(post.date).toLocaleDateString() : 'Date not specified'}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No blog posts found. You can add one in your admin panel!</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
