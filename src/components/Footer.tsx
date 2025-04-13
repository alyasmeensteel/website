
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const services = [
    { name: 'Steel Fabrication', href: '#services' },
    { name: 'Aluminium Works', href: '#services' },
    { name: 'Glass Installations', href: '#services' },
    { name: 'Custom Projects', href: '#contact' },
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:info@yasmeensteel.com', label: 'Email' },
  ];

  return (
    <footer className="bg-steel-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="font-bold text-xl mb-4">Al Yasmeen Steel</h3>
            <p className="text-gray-300 mb-4">
              Crafting excellence in steel, aluminium, and glass with precision 
              engineering and superior craftsmanship.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Industrial Area, Dubai, UAE</p>
              <p>Phone: +971 4 123 4567</p>
              <p>Email: info@yasmeensteel.com</p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Al Yasmeen Steel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
