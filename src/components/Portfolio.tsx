
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  materials: string[];
  image: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Office Partition",
      category: "glass",
      description: "Custom glass partitions for a corporate headquarters",
      materials: ["Tempered Glass", "Aluminum Framing"],
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Industrial Staircase",
      category: "steel",
      description: "Heavy-duty steel staircase for a manufacturing facility",
      materials: ["Structural Steel", "Anti-slip Treads"],
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Residential Railing System",
      category: "aluminium",
      description: "Custom aluminum railing for a luxury home",
      materials: ["Anodized Aluminum", "Tempered Glass Panels"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Storefront Entrance",
      category: "glass",
      description: "Modern storefront with frameless glass doors",
      materials: ["Frameless Glass", "Stainless Steel Hardware"],
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Industrial Shelving",
      category: "steel",
      description: "Heavy-duty steel shelving for warehouse storage",
      materials: ["Galvanized Steel", "Reinforced Brackets"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Decorative Facade",
      category: "aluminium",
      description: "Aluminum composite panel facade for a commercial building",
      materials: ["Aluminum Composite Panels", "Custom Profiles"],
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'steel', label: 'Steel' },
    { id: 'aluminium', label: 'Aluminium' },
    { id: 'glass', label: 'Glass' }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Our Portfolio</h2>
          <p className="section-subtitle reveal">
            Showcasing our finest work and craftsmanship
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-secondary hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow reveal">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1 flex items-center">
                      {project.title}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </h3>
                    <p className="text-white/80 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                <p className="text-sm text-secondary mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-steel-50 text-steel-800 px-2 py-1 rounded"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
