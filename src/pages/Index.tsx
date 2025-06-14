
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Experience Section - Using AboutSection as it covers experience */}
      <div id="experience">
        <AboutSection />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="bg-space-darker py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 Marcelo S Ribeiro. Desenvolvido com ❤️ e muita ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
