import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Star, Moon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Subtitle */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium tracking-wide">20+ ANOS DE EXPERIÊNCIA</span>
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Marcelo S Ribeiro
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          IA e Desenvolvimento: Transformando Ideias em Soluções: <span className="text-cyan-400 font-semibold">Inteligência Artificial</span>, 
            <span className="text-purple-400 font-semibold"> Backend</span> e 
            <span className="text-pink-400 font-semibold"> Frontend</span> Development
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Python', 'Java', 'JavaScript', 'IA', 'Banco de Dados', 'Backend', 'Frontend'].map((tech, index) => (
              <span 
                key={tech}
                className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl px-4 py-2 text-sm font-medium text-white/90 hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="backdrop-blur-lg bg-black/20 border border-cyan-400 hover:border-purple-400 transition-all duration-300 text-white px-8 py-3 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Vamos Conversar
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-lg bg-black/20 border border-white/30 hover:border-cyan-400 text-white hover:text-cyan-400 transition-all duration-300 px-8 py-3 hover:scale-105"
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
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
