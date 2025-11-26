import React, { useState } from 'react';
import { getNailArtSuggestion } from '../services/geminiService';
import { Button } from './Button';
import { Wand2, Loader2, Sparkles } from 'lucide-react';

export const AIGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);
    try {
      const suggestion = await getNailArtSuggestion(input);
      setResult(suggestion);
    } catch (error) {
      setResult("Ops! Nossa consultora virtual está ocupada. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultoria-ia" className="py-20 bg-gradient-to-r from-rose-300 to-pink-300 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 border border-white/30 text-rose-50">
              <Sparkles size={16} />
              Consultoria Virtual Gratuita
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-sm">
            Não sabe qual cor escolher?
          </h2>
          <p className="text-rose-50 text-lg mb-10 max-w-2xl mx-auto font-light">
            Conte para nossa IA qual é a ocasião, sua roupa ou como você está se sentindo, e receba uma sugestão exclusiva e personalizada!
          </p>

          <div className="bg-white/95 backdrop-blur-xl p-2 md:p-4 rounded-3xl shadow-2xl shadow-rose-900/10 max-w-2xl mx-auto flex flex-col md:flex-row gap-4 ring-4 ring-white/20">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Vou ser madrinha de casamento com vestido azul royal..."
              className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 px-4 py-3"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <Button 
              onClick={handleGenerate} 
              disabled={loading || !input.trim()}
              className="md:w-auto w-full flex items-center justify-center gap-2 shrink-0 bg-gradient-to-r from-rose-400 to-pink-500 border-none"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
              {loading ? 'Consultando...' : 'Sugerir Estilo'}
            </Button>
          </div>

          {result && (
            <div className="mt-8 animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-md border border-white/40 p-6 rounded-2xl inline-block max-w-2xl text-left shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2.5 rounded-full shrink-0 text-rose-400 shadow-sm">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-white">Sugestão da Especialista:</h4>
                    <p className="text-rose-50 text-lg leading-relaxed whitespace-pre-line">
                      {result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};