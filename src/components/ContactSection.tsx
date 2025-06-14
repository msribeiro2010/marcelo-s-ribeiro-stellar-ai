
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Rocket, Star, Moon } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 cosmic-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 space-dots opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-space-purple to-space-blue rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-space-cyan to-space-pink rounded-full opacity-5 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-space-cyan animate-glow" />
            <span className="text-space-cyan font-medium tracking-wide">VAMOS TRABALHAR JUNTOS</span>
            <Star className="w-5 h-5 text-space-cyan animate-glow" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar suas ideias em realidade? Vamos conversar sobre seu próximo projeto.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card-dark p-8 hover-lift animate-slide-right">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-purple to-space-blue flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Especialidades</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Desenvolvimento de IA</li>
                <li>• Sistemas Backend</li>
                <li>• Aplicações Frontend</li>
                <li>• Arquitetura de Software</li>
                <li>• Consultoria Técnica</li>
              </ul>
            </div>
            
            <div className="glass-card-dark p-8 hover-lift animate-slide-right" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-space-cyan to-space-pink flex items-center justify-center mb-6">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Experiência</h3>
              <p className="text-white/70">
                Mais de 20 anos desenvolvendo soluções tecnológicas para empresas de todos os tamanhos, 
                sempre focado em inovação e qualidade.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card-dark p-8 md:p-12 animate-slide-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nome</label>
                    <Input 
                      placeholder="Seu nome"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">E-mail</label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Assunto</label>
                  <Input 
                    placeholder="Assunto do projeto"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full glass-card-dark hover:glass-card border-space-cyan hover:border-space-purple transition-all duration-300 text-white ai-glow hover-lift"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
