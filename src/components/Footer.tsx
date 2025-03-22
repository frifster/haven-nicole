import React from 'react';
import './Footer.css';

interface FooterColumn {
  title: string;
  links: string[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: ['Haven Glow', 'Haven Bliss', 'Haven Muse', 'Self-Love Body Care Set']
  },
  {
    title: 'About',
    links: ['Our Story', 'Our Philosophy', 'Blog', 'Contact Us']
  },
  {
    title: 'Help',
    links: ['FAQs', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service']
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'Pinterest', 'TikTok', 'Facebook']
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>HAVEN</h2>
            <p>"A scent to remember, a self-care moment to cherish."</p>
          </div>
          
          <div className="footer-links">
            {footerColumns.map((column, index) => (
              <div key={index} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
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