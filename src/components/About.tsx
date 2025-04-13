
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const About = () => {
  const timeline = [
    { year: '1995', title: 'Founded', description: 'Started as a small workshop with a passion for quality metalwork.' },
    { year: '2005', title: 'Expansion', description: 'Expanded our facility and introduced aluminum fabrication services.' },
    { year: '2012', title: 'Innovation', description: 'Implemented advanced CNC technology and expanded our design team.' },
    { year: '2020', title: 'Regional Leader', description: 'Recognized as a regional leader in steel and aluminum solutions.' },
  ];

  const values = [
    { title: 'Excellence', icon: <Award className="h-8 w-8 text-white" />, description: 'We strive for excellence in every project we undertake.' },
    { title: 'Innovation', icon: <Briefcase className="h-8 w-8 text-white" />, description: 'Constantly embracing new technologies and methods.' },
    { title: 'Teamwork', icon: <Users className="h-8 w-8 text-white" />, description: 'Our diverse team is our greatest asset and strength.' },
    { title: 'Integrity', icon: <Check className="h-8 w-8 text-white" />, description: 'Honest, transparent, and ethical in all our dealings.' },
  ];

  const partnerLogos = [
    { name: 'Acme Corporation', logo: '/placeholder.svg' },
    { name: 'TechGiant', logo: '/placeholder.svg' },
    { name: 'BuildWell', logo: '/placeholder.svg' },
    { name: 'Steel Partners', logo: '/placeholder.svg' },
    { name: 'Construct Pro', logo: '/placeholder.svg' },
    { name: 'MetalWorks', logo: '/placeholder.svg' },
    { name: 'Skyscraper Inc', logo: '/placeholder.svg' },
    { name: 'InfraBuilders', logo: '/placeholder.svg' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1552ba]/5 to-white opacity-50 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1552ba] mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-steel-600">
            From humble beginnings to industry leadership, the Al Yasmeen Steel story is one of passion, innovation, and unwavering commitment to quality.
          </p>
        </div>

        {/* Timeline section */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1552ba]/30 to-[#1552ba] rounded-full"></div>
            
            {/* Timeline events */}
            <div className="space-y-16 relative">
              {timeline.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative z-10`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-steel-100">
                      <span className="text-4xl font-bold text-[#1552ba]">{event.year}</span>
                      <h3 className="text-2xl font-semibold text-steel-700 mt-2">{event.title}</h3>
                      <p className="text-steel-600 mt-2">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#1552ba] border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core values section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-steel-700">Our Core Values</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-gradient-to-br from-[#1552ba] to-[#1552ba]/80 rounded-xl p-1 h-full">
                  <div className="bg-white rounded-lg p-6 flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#1552ba] to-[#1552ba]/80 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-steel-700 mb-2">{value.title}</h4>
                    <p className="text-steel-600 flex-grow">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands we've worked with */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-steel-700">Brands We've Worked With</h3>
          
          <div className="relative overflow-hidden rounded-xl py-8 px-4 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {partnerLogos.map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5 pl-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center h-32 transition-all hover:shadow-md hover:border-[#1552ba]/20">
                      <div className="text-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="h-12 w-auto mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity"
                        />
                        <p className="text-sm font-medium text-steel-600">{partner.name}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="bg-white border-[#1552ba]/20 hover:bg-[#1552ba] hover:text-white h-10 w-10" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="bg-white border-[#1552ba]/20 hover:bg-[#1552ba] hover:text-white h-10 w-10" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Stats in a horizontal banner */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1552ba] to-[#1552ba]/80"></div>
          <div className="relative z-10 py-10 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                <div className="text-white/80 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 font-medium">Projects Completed</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                <div className="text-white/80 font-medium">Skilled Personnel</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-white/80 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center" data-aos="fade-up">
          <Button 
            variant="default" 
            className="bg-[#1552ba] hover:bg-[#1552ba]/90 group text-white font-medium px-8 py-6 rounded-lg shadow-lg inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
