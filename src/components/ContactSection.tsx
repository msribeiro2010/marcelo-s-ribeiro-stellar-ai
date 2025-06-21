import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Rocket, Star, Moon, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulação de envio - removi emailjs para evitar dependência externa
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem simulada!",
        description: "Formulário funcionando. EmailJS será configurado posteriormente.",
      });
      
      // Limpar formulário após envio
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro simulado",
        description: "Esta é apenas uma simulação.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium tracking-wide">VAMOS TRABALHAR JUNTOS</span>
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar suas ideias em realidade? Vamos conversar sobre seu próximo projeto.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
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
            
            <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center mb-6">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Experiência</h3>
              <p className="text-white/70">
                Formado em Matemática com Pós-graduação em Desenvolvimento Web. 
                Mais de 20 anos de experiência em TI no TRT15, sempre focado em inovação e qualidade.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nome</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      disabled={isLoading}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">E-mail</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      disabled={isLoading}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Assunto</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto do projeto"
                    required
                    disabled={isLoading}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Mensagem</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto..."
                    rows={6}
                    required
                    disabled={isLoading}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full backdrop-blur-lg bg-black/20 border border-cyan-400 hover:border-purple-400 transition-all duration-300 text-white hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
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
