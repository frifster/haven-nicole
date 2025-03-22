import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  imageClass: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'evening-ritual',
    title: 'Transform Your Evening with Our Self-Care Ritual',
    category: 'Rituals',
    excerpt: 'Discover how to create a luxurious and effective evening self-care routine that will transform your skin while helping you unwind.',
    imageClass: 'ritual',
    date: 'May 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 'natural-ingredients',
    title: 'Understanding Natural Skincare Ingredients',
    category: 'Ingredients',
    excerpt: 'Learn about the powerful natural ingredients in Haven products and how they benefit your skin.',
    imageClass: 'ingredients',
    date: 'May 12, 2024',
    readTime: '4 min read'
  },
  {
    id: 'summer-skincare',
    title: 'Summer Skincare Tips for Glowing Skin',
    category: 'Tips',
    excerpt: 'Essential tips to keep your skin healthy, protected, and glowing during the hot summer months.',
    imageClass: 'tips',
    date: 'May 10, 2024',
    readTime: '3 min read'
  },
  {
    id: 'science-of-moisturizing',
    title: 'The Science Behind Skin Moisturization',
    category: 'Science',
    excerpt: 'Dive deep into the science of how moisturizers work and why they are essential for healthy skin.',
    imageClass: 'science',
    date: 'May 8, 2024',
    readTime: '6 min read'
  },
  {
    id: 'mindful-self-care',
    title: 'The Art of Mindful Self-Care: Beyond Skincare',
    category: 'Wellness',
    excerpt: 'Explore how to create a mindful self-care practice that nurtures your body and soul through therapeutic body care rituals.',
    imageClass: 'wellness',
    date: 'May 5, 2024',
    readTime: '7 min read'
  },
  {
    id: 'sustainable-beauty',
    title: 'Sustainable Beauty: Our Commitment to the Planet',
    category: 'Sustainability',
    excerpt: 'Learn about our commitment to sustainable beauty practices and how we minimize our environmental impact while delivering effective skincare.',
    imageClass: 'sustainability',
    date: 'May 3, 2024',
    readTime: '5 min read'
  }
];

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
            <h2>Transform Your Evening with Our Self-Care Ritual</h2>
            <p>
              Discover how to create a luxurious and effective evening self-care routine
              that will not only transform your skin but also help you unwind and
              prepare for a restful night's sleep. Learn about the perfect product
              combinations and techniques to maximize their benefits.
            </p>
            <Link to="/blog/evening-ritual" className="read-more">
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