import React from 'react';
import { portfolioData } from '../mock';
import * as Icons from 'lucide-react';

const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <footer className="text-white py-12" style={{
      background: 'linear-gradient(135deg, #483478 0%, #8950cc 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              haroon<span style={{ color: '#fcae44' }}>mughal</span>
            </h3>
            <p className="text-white text-opacity-80 text-sm">
              Graphic Designer & Visual Storyteller based in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-white hover:bg-white transition-all"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fcae44';
                    e.currentTarget.style.borderColor = '#fcae44';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  aria-label={social.platform}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-white text-opacity-80 hover:text-opacity-100 transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t text-center text-sm text-white text-opacity-70"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <p>
            © {currentYear} Haroon Mughal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
