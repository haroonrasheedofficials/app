import React from 'react';
import { portfolioData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import * as Icons from 'lucide-react';

const Services = () => {
  const { services } = portfolioData;

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Services
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{
                    backgroundColor: '#FFF9E6',
                    color: '#D4AF37'
                  }}
                >
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-2xl font-bold text-black group-hover:text-opacity-70 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
