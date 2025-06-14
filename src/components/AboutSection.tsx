
import React from 'react';
import { Star, Rocket, Moon } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "20+ Anos de Experiência",
      description: "Duas décadas desenvolvendo soluções tecnológicas inovadoras",
      gradient: "from-space-purple to-space-blue"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Especialista em IA",
      description: "Implementando soluções de inteligência artificial de ponta",
      gradient: "from-space-blue to-space-cyan"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Full Stack Developer",
      description: "Domínio completo em backend e frontend development",
      gradient: "from-space-cyan to-space-pink"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-space-dark to-space-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 space-dots opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-space-purple to-space-blue rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-space-cyan to-space-pink rounded-full opacity-5 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Profissional com mais de duas décadas de experiência em desenvolvimento de software, 
            especializado em tecnologias emergentes e soluções de inteligência artificial.
          </p>
        </div>
        
        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card-dark p-8 hover-lift group animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {exp.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-space-cyan transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Skills Section */}
        <div className="glass-card-dark p-8 md:p-12 animate-slide-up">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tecnologias & Especialidades
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-space-cyan mb-4">Backend Development</h4>
              <div className="space-y-3">
                {['Java', 'Python', 'Node.js', 'APIs REST', 'Microserviços'].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-space-cyan rounded-full animate-pulse"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-space-purple mb-4">Frontend & IA</h4>
              <div className="space-y-3">
                {['JavaScript/TypeScript', 'React', 'Machine Learning', 'Banco de Dados', 'DevOps'].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-space-purple rounded-full animate-pulse"></div>
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
