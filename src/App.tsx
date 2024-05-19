import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContentSection
        title="About Us"
        content="Learn more about our mission and values."
      />
      <ContentSection
        title="Our Services"
        content="Discover our wide range of services."
      />
      <ContentSection
        title="Contact Us"
        content="Get in touch with us for more information."
      />
      <Footer />
    </div>
  );
}

export default App;
