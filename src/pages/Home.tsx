import React from 'react';
import BundleOffer from '../components/BundleOffer';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Philosophy from '../components/Philosophy';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BundleOffer />
      <Philosophy />
      <Features />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </>
  );
};

export default Home; 