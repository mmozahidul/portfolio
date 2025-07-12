import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ content: string; data: any } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFindPost = async () => {
      try {
        const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw' });
        
        let foundPost = null;
        for (const path in postFiles) {
          const currentSlug = path.split('/').pop()?.replace('.md', '');
          
          if (currentSlug === slug) {
            const resolver = postFiles[path];
            const markdownContent = await resolver();
            const { data, content } = matter(markdownContent);
            foundPost = { data, content };
            break;
          }
        }
        
        if (foundPost) {
            setPost(foundPost);
        } else {
            setError("Post not found.");
        }

      } catch (e) {
        console.error("Error loading post", e);
        setError("Failed to load this post.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchAndFindPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (error || !post) {
    return <div className="text-center py-20 text-red-500">{error || "Post not found."}</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <Link to="/blog" className="text-blue-600 hover:underline">&larr; Back to All Posts</Link>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">{post.data.title}</h1>
      <p className="text-gray-500 mb-8 text-center">{post.data.date ? new Date(post.data.date).toLocaleDateString() : 'Date not specified'}</p>
      {post.data.thumbnail && <img src={post.data.thumbnail} alt={post.data.title} className="w-full h-auto object-cover rounded-lg mb-8" />}
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;
