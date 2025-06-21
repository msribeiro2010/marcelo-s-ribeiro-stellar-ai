import React from 'react';
import { Star, Rocket, Moon } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "20+ Anos de Experiência",
      description: "Mais de duas décadas desenvolvendo soluções tecnológicas no TRT15",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Especializando em IA",
      description: "Implementando soluções de inteligência artificial de ponta",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Full Stack Developer",
      description: "Domínio completo em backend e frontend development",
      gradient: "from-cyan-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Formado em Matemática com Pós-graduação em Desenvolvimento de Software para Web. 
            Mais de 20 anos de experiência em TI no TRT15, especializando em tecnologias emergentes 
            e soluções de inteligência artificial.
          </p>
        </div>
        
        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl p-8 hover:scale-105 group transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {exp.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Skills Section */}
        <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Formação & Especialidades
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Formação Acadêmica</h4>
              <div className="space-y-3">
                {['Graduação em Matemática', 'Pós-graduação em Desenvolvimento Web', '20+ anos de experiência no TRT15'].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Tecnologias & IA</h4>
              <div className="space-y-3">
                {['JavaScript/TypeScript', 'React', 'Machine Learning', 'Banco de Dados', 'DevOps'].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
