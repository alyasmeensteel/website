
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-steel-600" />,
      title: "Phone",
      details: "+971 4 123 4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-steel-600" />,
      title: "Email",
      details: "info@yasmeensteel.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-steel-600" />,
      title: "Address",
      details: "Industrial Area, Dubai, UAE",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Contact Us</h2>
          <p className="section-subtitle reveal">
            Visit our workshop or get in touch with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-[450px] mb-8 reveal">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.521851062934!2d55.39271617584383!3d25.2082995776471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5e16c8de83a5%3A0x3efccd2624f30aad!2sAl%20Yasmeen%20Steel%20Factory!5e0!3m2!1sen!2sus!4v1712864689178!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Yasmeen Steel Factory Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mb-6">
              <a 
                href="https://maps.app.goo.gl/fP5mVZvPe1JsyrNn6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-steel-600 hover:bg-steel-700 text-white py-3 px-6 rounded-md transition-colors inline-flex items-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            <div className="bg-steel-50 p-8 rounded-lg">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{item.title}</h4>
                      <p className="text-secondary">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-primary mb-4">Working Hours</h4>
                <div className="space-y-2 text-secondary">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
