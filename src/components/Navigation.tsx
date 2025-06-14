
import React, { useState, useEffect } from 'react';
import AILogo from './AILogo';
import { Button } from '@/components/ui/button';
import { Moon, Rocket } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card-dark backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="animate-slide-right">
            <AILogo />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-down">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-space-cyan transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white/80 hover:text-space-cyan transition-colors duration-300 font-medium"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-space-cyan transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="animate-slide-left">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="glass-card-dark hover:glass-card border-space-cyan hover:border-space-purple transition-all duration-300 text-white hover-lift"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Fale Comigo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
