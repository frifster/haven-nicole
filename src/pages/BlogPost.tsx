import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPost, blogPosts } from '../data/blogPosts';
import './BlogPost.css';

interface Section {
  title: string;
  content: string[];
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts.find((p: BlogPost) => p.id === postId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="blog-post-error">
        <h1>Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="button">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <div className={`blog-post-hero ${post.imageClass}`}>
          <div className="blog-post-hero-content">
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <article className="blog-post-content">
          <p className="intro">{post.content.intro}</p>

          {post.content.sections.map((section: Section, index: number) => (
            <section key={index} className="content-section">
              <h2>{section.title}</h2>
              {section.content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </section>
          ))}

          <p className="conclusion">{post.content.conclusion}</p>
        </article>

        <div className="blog-post-footer">
          <Link to="/blog" className="button secondary">← Back to Blog</Link>
          <div className="share-buttons">
            <button className="share-button">Share on Facebook</button>
            <button className="share-button">Share on Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 