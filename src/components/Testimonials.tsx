
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const Testimonial = ({ quote, author, position, company, rating }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm reveal">
      <div className="flex mb-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
      </div>
      <p className="text-secondary mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold text-primary">{author}</p>
        <p className="text-sm text-secondary">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Al Yasmeen Steel delivered our office partitioning project with exceptional precision. Their team's attention to detail and craftsmanship exceeded our expectations.",
      author: "Ahmed Hassan",
      position: "Project Manager",
      company: "Metropolitan Developers",
      rating: 5,
    },
    {
      quote:
        "We've worked with many contractors over the years, but none match the quality and reliability of Al Yasmeen Steel. Their custom steel fabrication for our industrial facility was flawless.",
      author: "Sarah Williams",
      position: "Operations Director",
      company: "Industrial Solutions Ltd",
      rating: 5,
    },
    {
      quote:
        "The aluminum and glass work they completed for our retail space transformed the entire look of our store. Professional service from start to finish.",
      author: "Mohammed Al-Fahim",
      position: "Store Owner",
      company: "Luxury Boutique",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-steel-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Client Testimonials</h2>
          <p className="section-subtitle reveal">
            Hear what our satisfied clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <a href="https://g.page/r/CfsgRPnwwkjJEBM/review" target="_blank" rel="noopener noreferrer">
            <Button className="bg-steel-600 hover:bg-steel-700 text-white inline-flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              Leave us a 5-star review on Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
