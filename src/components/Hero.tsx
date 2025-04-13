
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-steel-50 to-steel-100 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Crafting Excellence in <span className="text-steel-700">Steel</span>, 
            <span className="text-steel-800"> Aluminium</span> & <span className="text-steel-600">Glass</span>
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Transforming visions into precision-engineered solutions with unparalleled 
            craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
