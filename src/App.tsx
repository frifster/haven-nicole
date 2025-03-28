import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Bundle from './pages/Bundle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import OrderConfirmation from './pages/OrderConfirmation';
import Privacy from './pages/Privacy';
import Product from './pages/Product';
import ShippingAndReturns from './pages/ShippingAndReturns';
import Shop from './pages/Shop';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
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
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/shipping" element={<ShippingAndReturns />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
