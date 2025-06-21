
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  console.log("Index page is rendering");
  
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
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
      <footer className="bg-slate-800 py-8 border-t border-white/10">
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
