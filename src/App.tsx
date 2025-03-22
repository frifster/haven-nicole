import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Bundle from './pages/Bundle';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Product from './pages/Product';
import Shop from './pages/Shop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/bundle" element={<Bundle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
