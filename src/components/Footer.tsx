import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

interface FooterColumn {
  title: string;
  links: Array<{
    text: string;
    to: string;
  }>;
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { text: 'Haven Glow', to: '/product/haven-glow' },
      { text: 'Haven Bliss', to: '/product/haven-bliss' },
      { text: 'Haven Muse', to: '/product/haven-muse' },
      { text: 'Self-Love Body Care Set', to: '/bundle' }
    ]
  },
  {
    title: 'About',
    links: [
      { text: 'Our Story', to: '/about' },
      { text: 'Our Philosophy', to: '/about#philosophy' },
      { text: 'Blog', to: '/blog' },
      { text: 'Contact Us', to: '/contact' }
    ]
  },
  {
    title: 'Help',
    links: [
      { text: 'FAQs', to: '/how-it-works#faqs' },
      { text: 'Shipping & Returns', to: '/shipping' },
      { text: 'Privacy Policy', to: '/privacy' },
      { text: 'Terms of Service', to: '/terms' }
    ]
  },
  {
    title: 'Follow Us',
    links: [
      { text: 'Instagram', to: 'https://instagram.com' },
      { text: 'Pinterest', to: 'https://pinterest.com' },
      { text: 'TikTok', to: 'https://tiktok.com' },
      { text: 'Facebook', to: 'https://facebook.com' }
    ]
  }
];

const Footer: React.FC = () => {
  const isExternalLink = (url: string) => url.startsWith('http');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/">
              <h2>HAVEN</h2>
            </Link>
            <p>"A scent to remember, a self-care moment to cherish."</p>
          </div>
          
          <div className="footer-links">
            {footerColumns.map((column, index) => (
              <div key={index} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {isExternalLink(link.to) ? (
                        <a href={link.to} target="_blank" rel="noopener noreferrer">
                          {link.text}
                        </a>
                      ) : (
                        <Link to={link.to}>{link.text}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 