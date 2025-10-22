import React from 'react';
import { portfolioData } from '../mock';
import { Badge } from './ui/badge';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-gray-50">
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
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg"
                style={{
                  backgroundColor: '#D4AF37',
                  opacity: 0.2
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              {about.title}
            </h2>
            <div
              className="w-20 h-1 mb-8"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {about.description}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {about.description2}
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {about.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-colors cursor-default"
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
