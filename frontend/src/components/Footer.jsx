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
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              haroon<span style={{ color: '#D4AF37' }}>mughal</span>
            </h3>
            <p className="text-gray-400 text-sm">
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
                    className="text-gray-400 hover:text-white transition-colors"
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
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                  aria-label={social.platform}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t text-center text-sm text-gray-400"
          style={{ borderColor: '#333' }}
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
