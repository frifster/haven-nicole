import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const categories = ['All', 'Rituals', 'Ingredients', 'Tips', 'Science', 'Wellness', 'Sustainability'];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-hero">
          <h1>Haven Journal</h1>
          <p>Discover the art of self-care through our curated articles and expert tips</p>
        </div>

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="featured-post">
          <div className="featured-image ritual"></div>
          <div className="featured-content">
            <span className="post-category">Featured</span>
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <Link to={`/blog/${blogPosts[0].id}`} className="read-more">
              Read More →
            </Link>
          </div>
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.id}`} className="blog-card-link">
                <div className={`blog-image ${post.imageClass}`}></div>
                <div className="blog-content">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest skincare tips and product updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 