import React from 'react';
import { Rocket, Star } from 'lucide-react';

const AILogo = () => {
  return (
    <div className="relative flex items-center space-x-3 group">
      {/* Logo Container */}
      <div className="relative">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-20 blur-xl scale-150 animate-pulse"></div>
        
        {/* Main Logo Circle */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-1 animate-spin" style={{animationDuration: '20s'}}>
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            {/* AI Brain/Rocket Icon */}
            <div className="relative">
              <Rocket className="w-8 h-8 text-white animate-pulse" />
              <Star className="absolute -top-1 -right-1 w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full transform translate-x-1 translate-y-1"></div>
              <div className="absolute left-0 top-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          MSRIBEIRO2010
        </h1>
        <p className="text-sm text-cyan-400 opacity-80 font-medium">
          AI & Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default AILogo;
