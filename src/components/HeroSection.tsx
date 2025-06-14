
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Star, Moon, Space } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 space-dots opacity-30"></div>
      
      {/* Meteors */}
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-space-purple to-space-blue rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-space-cyan to-space-pink rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-space-blue to-space-cyan rounded-full opacity-10 blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-slide-down">
          {/* Subtitle */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-space-cyan animate-glow" />
            <span className="text-space-cyan font-medium tracking-wide">20+ ANOS DE EXPERIÊNCIA</span>
            <Star className="w-5 h-5 text-space-cyan animate-glow" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
            Marcelo S Ribeiro
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Especialista em <span className="text-space-cyan font-semibold">Inteligência Artificial</span>, 
            <span className="text-space-purple font-semibold"> Backend</span> e 
            <span className="text-space-pink font-semibold"> Frontend</span> Development
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Python', 'Java', 'JavaScript', 'IA', 'Banco de Dados', 'Backend', 'Frontend'].map((tech, index) => (
              <span 
                key={tech}
                className="glass-card-dark px-4 py-2 text-sm font-medium text-white/90 hover-lift cursor-default"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="glass-card-dark hover:glass-card border-space-cyan hover:border-space-purple transition-all duration-300 text-white px-8 py-3 hover-lift ai-glow"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Vamos Conversar
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card-dark border-white/30 hover:border-space-cyan text-white hover:text-space-cyan transition-all duration-300 px-8 py-3 hover-lift"
            >
              <Moon className="w-5 h-5 mr-2" />
              Ver Projetos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-space-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
