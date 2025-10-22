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
    <section className="relative min-h-screen flex items-center justify-center pt-20" style={{
      background: 'linear-gradient(135deg, #483478 0%, #8950cc 50%, #e061a8 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Username/Handle */}
            <div className="mb-6">
              <span
                className="inline-block text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(252, 174, 68, 0.2)',
                  color: '#fcae44',
                  border: '1px solid #fcae44'
                }}
              >
                {hero.username}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {hero.name}
            </h1>

            {/* Tagline */}
            <p
              className="text-2xl sm:text-3xl font-medium mb-8"
              style={{ color: '#fcae44' }}
            >
              {hero.tagline}
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white text-opacity-90 mb-12 leading-relaxed">
              {hero.description}
            </p>

            {/* CTA Button */}
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="text-white hover:bg-opacity-90 transition-all duration-300 text-lg px-8 py-6 group"
              style={{
                backgroundColor: '#fcae44'
              }}
            >
              {hero.cta}
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>

            {/* Location Badge */}
            <div className="mt-8">
              <p className="text-sm text-white text-opacity-70 tracking-wide">
                Based in {hero.location}
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://customer-assets.emergentagent.com/job_haroon-portfolio/artifacts/yv50bvwu_dreamina-2025-10-18-6553-A%20hyper-realistic%20studio%20portrait%20of%20upl....jpeg"
                alt="Haroon Mughal"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl opacity-30 blur-xl"
              style={{
                backgroundColor: '#fcae44'
              }}
            />
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-xl"
              style={{
                backgroundColor: '#e061a8'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
