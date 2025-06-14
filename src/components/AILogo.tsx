
import React from 'react';
import { Rocket, Star } from 'lucide-react';

const AILogo = () => {
  return (
    <div className="relative flex items-center space-x-3 group">
      {/* Logo Container */}
      <div className="relative">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-space-purple via-space-blue to-space-cyan opacity-20 blur-xl scale-150 animate-pulse-slow"></div>
        
        {/* Main Logo Circle */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-space-purple via-space-blue to-space-cyan p-1 animate-rotate-slow">
          <div className="w-full h-full rounded-full bg-space-dark flex items-center justify-center">
            {/* AI Brain/Rocket Icon */}
            <div className="relative">
              <Rocket className="w-8 h-8 text-white animate-float" />
              <Star className="absolute -top-1 -right-1 w-4 h-4 text-space-cyan animate-glow" />
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-rotate-slow">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-space-cyan rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-space-pink rounded-full transform translate-x-1 translate-y-1"></div>
              <div className="absolute left-0 top-1/2 w-1 h-1 bg-space-purple rounded-full transform -translate-x-1 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
          Marcelo S Ribeiro
        </h1>
        <p className="text-sm text-space-cyan opacity-80 font-medium">
          AI & Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default AILogo;
