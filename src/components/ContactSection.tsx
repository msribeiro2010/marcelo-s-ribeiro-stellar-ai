
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Rocket, Star, Moon, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      const serviceId = 'service_mh1iza9';
      const templateId = 'template_pj3lwlp';
      const publicKey = 'K7F_DE0sdVjTwV0P5';
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        to_name: 'Marcelo S Ribeiro'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      
      // Limpar formulário após envio
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

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
                Formado em Matemática com Pós-graduação em Desenvolvimento Web. 
                Mais de 20 anos de experiência em TI no TRT15, sempre focado em inovação e qualidade.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card-dark p-8 md:p-12 animate-slide-left">
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
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
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300"
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
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-space-cyan transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full glass-card-dark hover:glass-card border-space-cyan hover:border-space-purple transition-all duration-300 text-white ai-glow hover-lift disabled:opacity-50"
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
