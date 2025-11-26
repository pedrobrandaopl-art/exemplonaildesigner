import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-rose-900/60 font-sans text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1.5 w-24 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};