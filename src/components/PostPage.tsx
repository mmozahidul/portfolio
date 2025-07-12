import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ content: string; data: any } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        // Dynamically import the specific markdown file
        const postModule = await import(`/src/posts/${slug}.md?raw`);
        const { data, content } = matter(postModule.default);
        setPost({ data, content });
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link to="/blog" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.data.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(post.data.date).toLocaleDateString()}</p>
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;