import React from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically render icon
  const IconComponent = (Icons as any)[service.iconName] || Icons.Sparkles;

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 border border-white/60 hover:border-rose-200 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-50 to-transparent rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
      <div className="text-rose-500 font-bold font-sans text-lg">{service.price}</div>
    </div>
  );
};