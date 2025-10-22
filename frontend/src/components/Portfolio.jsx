import React, { useState } from 'react';
import { portfolioData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { portfolio } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(portfolio.map(item => item.category))];

  const filteredProjects = filter === 'All'
    ? portfolio
    : portfolio.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#483478' }}>
            My Work
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#fcae44' }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent projects showcasing creativity, strategy, and design excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white"
              style={{
                backgroundColor: filter === category ? '#8950cc' : '#e5e7eb',
                color: filter === category ? '#fff' : '#4b5563'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-all duration-300 flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, rgba(72, 52, 120, 0) 0%, rgba(137, 80, 204, 0.9) 100%)',
                  opacity: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                  <ExternalLink
                    className="text-white"
                    size={32}
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#483478' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs"
                      style={{
                        backgroundColor: 'rgba(252, 174, 68, 0.15)',
                        color: '#fcae44',
                        border: '1px solid rgba(252, 174, 68, 0.3)'
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
