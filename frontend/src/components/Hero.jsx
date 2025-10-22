import React from 'react';
import { portfolioData } from '../mock';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Username/Handle */}
          <div className="mb-6">
            <span
              className="inline-block text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full"
              style={{
                backgroundColor: '#FFF9E6',
                color: '#D4AF37'
              }}
            >
              {hero.username}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            {hero.name}
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl sm:text-3xl font-medium mb-8"
            style={{ color: '#D4AF37' }}
          >
            {hero.tagline}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 text-lg px-8 py-6 group"
          >
            {hero.cta}
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </Button>

          {/* Location Badge */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 tracking-wide">
              Based in {hero.location}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
        }}
      />
    </section>
  );
};

export default Hero;
