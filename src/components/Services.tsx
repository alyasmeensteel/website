
import React from 'react';
import { Hammer, Scissors, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow reveal", className)}>
      <div className="bg-steel-50 p-3 rounded-md inline-block mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Hammer className="h-8 w-8 text-steel-700" />,
      title: "Steel Fabrication",
      description: "Custom steel structures, frames, railings, and decorative elements designed and fabricated to precise specifications with superior strength and durability."
    },
    {
      icon: <Scissors className="h-8 w-8 text-steel-600" />,
      title: "Aluminium Works",
      description: "Lightweight, corrosion-resistant aluminium solutions including windows, doors, facades, and structural elements tailored to your architectural requirements."
    },
    {
      icon: <Workflow className="h-8 w-8 text-steel-800" />,
      title: "Glass Installations",
      description: "Premium glass solutions including tempered glass, laminated glass, decorative glass, and structural glazing for both aesthetic appeal and functional performance."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Our Services</h2>
          <p className="section-subtitle reveal">
            Expert solutions tailored to your project requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
