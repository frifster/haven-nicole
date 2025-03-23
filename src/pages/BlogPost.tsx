import React from 'react';
import { FaFacebook } from 'react-icons/fa';
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

  const handleFacebookShare = () => {
    if (!post) return;
    
    // Construct share content
    const shareUrl = new URL('https://www.facebook.com/sharer/sharer.php');
    const currentUrl = `${window.location.origin}/blog/${post.id}`;
    const quote = `${post.title}\n\n${post.excerpt}`;
    
    shareUrl.searchParams.append('u', currentUrl);
    shareUrl.searchParams.append('quote', quote);
    shareUrl.searchParams.append('hashtag', '#HavenBodyCare');

    // Open share dialog in a centered popup window
    const width = 626;
    const height = 436;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      shareUrl.toString(),
      'FacebookShare',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    );
  };

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
            <button className="share-button facebook" onClick={handleFacebookShare}>
              <FaFacebook /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage; 