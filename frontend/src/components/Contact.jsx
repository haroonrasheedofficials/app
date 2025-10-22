import React, { useState } from 'react';
import { portfolioData } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import * as Icons from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from './ui/toaster';

const Contact = () => {
  const { contact } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#483478' }}>
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#fcae44' }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 shadow-lg" style={{ borderColor: '#e5e7eb' }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#483478' }}>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 transition-colors"
                    placeholder="Your name"
                    style={{
                      borderColor: '#e5e7eb'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8950cc'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#483478' }}>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 transition-colors"
                    placeholder="your@email.com"
                    style={{
                      borderColor: '#e5e7eb'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8950cc'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#483478' }}>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-2 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    style={{
                      borderColor: '#e5e7eb'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#8950cc'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white hover:bg-opacity-90 transition-colors py-6 text-base font-semibold"
                  style={{
                    backgroundColor: '#8950cc'
                  }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#483478' }}>Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(252, 174, 68, 0.15)', color: '#fcae44' }}
                  >
                    <Icons.Mail size={20} />
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-opacity-70 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#483478' }}>Follow Me</h3>
              <div className="flex space-x-4">
                {contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300"
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
                    aria-label={social.platform}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card
              className="border-2 p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(72, 52, 120, 0.05) 0%, rgba(252, 174, 68, 0.1) 100%)',
                borderColor: '#fcae44'
              }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#483478' }}>Ready to Start?</h3>
              <p className="text-gray-700 mb-4">
                Let's discuss how I can help bring your vision to life with exceptional design.
              </p>
              <Button
                className="w-full text-white hover:bg-opacity-90 transition-colors"
                style={{
                  backgroundColor: '#e061a8'
                }}
                onClick={() => document.getElementById('name').focus()}
              >
                Start a Project
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
