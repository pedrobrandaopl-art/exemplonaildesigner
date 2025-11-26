import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle, MapPin, Clock, ArrowRight, Star, User, Sparkles as SparklesIcon, Palette, Heart } from 'lucide-react';
import { Button } from './components/Button';
import { SectionTitle } from './components/SectionTitle';
import { ServiceCard } from './components/ServiceCard';
import { AIGenerator } from './components/AIGenerator';
import { Service } from './types';

// Mock Data
const services: Service[] = [
  {
    id: '1',
    title: 'Manicure Premium',
    description: 'Cutilagem russa detalhada, hidratação profunda e esmaltação em gel de alta durabilidade.',
    price: 'R$ 80,00',
    iconName: 'HandMetal'
  },
  {
    id: '2',
    title: 'Alongamento em Fibra',
    description: 'Alongamento natural e resistente. Perfeito para quem deseja unhas longas e elegantes.',
    price: 'R$ 180,00',
    iconName: 'Sparkles'
  },
  {
    id: '3',
    title: 'Nail Art Personalizada',
    description: 'Designs exclusivos, pedrarias, encapsuladas e desenhos à mão livre.',
    price: 'A partir de R$ 20,00',
    iconName: 'Palette'
  },
  {
    id: '4',
    title: 'Spa dos Pés',
    description: 'Esfoliação, hidratação com parafina e massagem relaxante, além da pedicure completa.',
    price: 'R$ 95,00',
    iconName: 'Footprints'
  }
];

const testimonials = [
  { id: 1, name: "Ana Souza" },
  { id: 2, name: "Beatriz Lima" },
  { id: 3, name: "Carla Dias" }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active section could be added here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, label }: { id: string, label: string }) => (
    <button 
      onClick={() => scrollToSection(id)} 
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeSection === id 
          ? 'text-rose-600 bg-rose-50 shadow-sm' 
          : 'text-gray-600 hover:text-rose-500 hover:bg-gray-50'
      }`}
    >
      {label}
      {activeSection === id && (
        <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"></span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 font-sans text-gray-800 selection:bg-rose-200">
      
      {/* Floating Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-5xl transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-xl shadow-rose-200/20 border border-white/50 px-4 py-3 md:px-8 md:py-3 flex items-center justify-between md:gap-8">
          
          <div className="text-xl font-serif font-bold text-rose-500 tracking-wider flex items-center gap-1 shrink-0">
            Studio<span className="text-rose-900/80">Rose</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink id="home" label="Início" />
            <NavLink id="sobre" label="O Studio" />
            <NavLink id="servicos" label="Serviços" />
            <NavLink id="galeria" label="Galeria" />
          </nav>

          <div className="hidden md:block">
             <Button onClick={() => scrollToSection('contato')} variant="primary" className="text-sm px-6 py-2 shadow-none hover:shadow-md">
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-rose-800 p-1" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl shadow-xl rounded-3xl py-6 flex flex-col items-center space-y-4 animate-fade-in border border-white/50">
            <button onClick={() => scrollToSection('home')} className="text-lg font-medium text-rose-900">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="text-lg font-medium text-rose-900">O Studio</button>
            <button onClick={() => scrollToSection('servicos')} className="text-lg font-medium text-rose-900">Serviços</button>
            <button onClick={() => scrollToSection('galeria')} className="text-lg font-medium text-rose-900">Galeria</button>
            <Button onClick={() => scrollToSection('contato')} fullWidth className="mx-8 max-w-[200px]">Agendar Agora</Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 md:pt-52 md:pb-32 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-pink-200/40 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 mb-12 md:mb-0 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 rounded-full text-sm font-semibold mb-6 animate-fade-in-up border border-rose-200 shadow-sm">
              ✨ Especialistas em Nail Design e Spa
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-800 leading-tight mb-6">
              Sua beleza começa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600 relative inline-block">
                pelas mãos
              </span>
            </h1>
            <p className="text-lg text-gray-600/90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Transforme suas unhas em obras de arte. Técnicas modernas, biossegurança garantida e um ambiente acolhedor em tons de rosa para você relaxar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => scrollToSection('contato')} className="flex items-center justify-center gap-2">
                Agendar Horário <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('galeria')}>
                Ver Trabalhos
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl shadow-rose-200/50 max-w-md mx-auto aspect-square ring-1 ring-rose-100 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
              <SparklesIcon size={120} className="text-white/50" />
            </div>
            {/* Decor Elements */}
            <div className="absolute top-1/4 -right-4 w-24 h-24 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 relative">
         <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Oferecemos uma variedade de tratamentos para cuidar da saúde e beleza das suas unhas com todo carinho."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Suggestion Section */}
      <AIGenerator />

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Galeria de Arte" 
            subtitle="Confira alguns dos nossos trabalhos recentes e inspire-se para sua próxima visita."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 group relative border-4 border-white h-80 bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col items-center justify-center">
                <Palette size={48} className="text-rose-200 mb-4" />
                <span className="text-rose-300 font-serif italic">Nail Art Exclusiva</span>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    <Instagram size={18} /> @studiorose
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors border-b-2 border-rose-200 hover:border-rose-400 pb-1"
            >
              <Instagram size={20} />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white/60 backdrop-blur-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl shadow-lg mt-8 border-4 border-white h-64 w-full bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center text-white/50">
                 <Heart size={40} />
              </div>
              <div className="rounded-2xl shadow-lg border-4 border-white h-64 w-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center text-white/50">
                 <SparklesIcon size={40} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Sobre o Studio Rose
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full mb-6"></div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
              Com uma trajetória de excelência no mercado da beleza, o Studio Rose é especializado em técnicas de alongamento e saúde das unhas naturais.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
              Nossa missão é proporcionar não apenas unhas bonitas, mas um momento de autocuidado e elevação da autoestima. Utilizamos apenas produtos de primeira linha, garantindo total segurança e durabilidade.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">5k+</span>
                <span className="text-sm text-gray-500">Clientes Atendidas</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">10+</span>
                <span className="text-sm text-gray-500">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">100%</span>
                <span className="text-sm text-gray-500">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements for testimonials */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="O que dizem as clientes" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((client) => (
              <div key={client.id} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-rose-100 border border-white relative transition-transform hover:-translate-y-2 duration-300">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-rose-400 to-pink-500 text-white p-2 rounded-full shadow-lg">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-gray-600 mb-6 italic font-light">"Simplesmente o melhor atendimento! Minhas unhas nunca estiveram tão saudáveis e bonitas. O ambiente é incrível."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-full overflow-hidden border-2 border-rose-200 flex items-center justify-center text-rose-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{client.name}</h4>
                    <span className="text-xs text-rose-500">Cliente fiel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-rose-900 to-pink-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-rose-100">Vamos agendar seu momento?</h2>
              <p className="text-rose-200/80 mb-8 text-lg font-light">
                Entre em contato pelo WhatsApp para verificar disponibilidade de horários e tirar dúvidas. Sua beleza merece prioridade.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-rose-300 group-hover:bg-white/20 transition-colors">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-rose-50">Localização</h4>
                    <p className="text-rose-200/70">Av. Paulista, 1000 - Jardins, São Paulo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-rose-300 group-hover:bg-white/20 transition-colors">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-rose-50">Horário de Atendimento</h4>
                    <p className="text-rose-200/70">Seg - Sáb: 09:00 às 19:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-rose-300 group-hover:bg-white/20 transition-colors">
                    <MessageCircle />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-rose-50">Contato</h4>
                    <p className="text-rose-200/70">(11) 99999-9999</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white border-none shadow-lg shadow-green-900/30 flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full">
                  <MessageCircle size={24} />
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-6 text-rose-100">Envie uma mensagem</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-rose-200/80 mb-1">Nome</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-400 text-white placeholder-rose-200/30 transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm text-rose-200/80 mb-1">Telefone</label>
                  <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-400 text-white placeholder-rose-200/30 transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm text-rose-200/80 mb-1">Mensagem</label>
                  <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-400 text-white placeholder-rose-200/30 transition-colors" placeholder="Olá, gostaria de agendar..."></textarea>
                </div>
                <Button fullWidth className="bg-rose-500 hover:bg-rose-600 text-white border-none">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white/90 py-8 border-t border-pink-500">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Studio Rose. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;