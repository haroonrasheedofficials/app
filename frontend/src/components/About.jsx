import React from 'react';
import { portfolioData } from '../mock';
import { Badge } from './ui/badge';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src={about.image}
                alt="Workspace"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg opacity-30"
                style={{
                  backgroundColor: '#e061a8'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#483478' }}>
              {about.title}
            </h2>
            <div
              className="w-20 h-1 mb-8"
              style={{ backgroundColor: '#fcae44' }}
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {about.description}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {about.description2}
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#483478' }}>Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-2 hover:text-white transition-colors cursor-default"
                    style={{
                      borderColor: '#8950cc',
                      color: '#8950cc'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#8950cc';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#8950cc';
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
