import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// This new version is more reliable for the build process
const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ content: string; data: any } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndFindPost = async () => {
      try {
        // 1. Get all post files, just like on the main blog page
        const postFiles = import.meta.glob('/src/posts/*.md');

        let foundPost = null;
        // 2. Loop through them to find the one that matches the URL
        for (const path in postFiles) {
          const currentSlug = path.split('/').pop()?.replace('.md', '');

          if (currentSlug === slug) {
            const resolver = postFiles[path];
            const postModule = await resolver() as { default: string };
            const { data, content } = matter(postModule.default);
            foundPost = { data, content };
            break; // Stop looking once we find the matching post
          }
        }
        setPost(foundPost);
      } catch (e) {
        console.error("Error loading post", e);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFindPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  // The rest of the page is the same
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <Link to="/blog" className="text-blue-600 hover:underline">&larr; Back to All Posts</Link>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">{post.data.title}</h1>
      <p className="text-gray-500 mb-8 text-center">{new Date(post.data.date).toLocaleDateString()}</p>
      {post.data.thumbnail && <img src={post.data.thumbnail} alt={post.data.title} className="w-full h-auto object-cover rounded-lg mb-8" />}
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;
