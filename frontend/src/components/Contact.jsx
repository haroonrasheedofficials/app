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
    // Mock form submission
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
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 focus:border-black transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 focus:border-black transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border-2 border-gray-300 focus:border-black transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-6 text-base font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#FFF9E6', color: '#D4AF37' }}
                  >
                    <Icons.Mail size={20} />
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                    aria-label={social.platform}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card
              className="border-2 border-black p-8"
              style={{ backgroundColor: '#FFF9E6' }}
            >
              <h3 className="text-2xl font-bold text-black mb-2">Ready to Start?</h3>
              <p className="text-gray-700 mb-4">
                Let's discuss how I can help bring your vision to life with exceptional design.
              </p>
              <Button
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
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
