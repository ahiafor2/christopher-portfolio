import React from 'react';
import { SERVICES_DATA } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 id="services-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest font-bold mb-3">What I Do</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Technical Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-white/[0.04] border border-industrial-500/50 transition-all duration-300 rounded-lg shadow-xl shadow-black/20 -translate-y-1 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-block p-4 bg-dark-950 rounded-lg border border-industrial-500 text-industrial-500 group-hover:bg-industrial-500 group-hover:text-white group-hover:border-industrial-500 transition-colors">
                <service.icon className="h-8 w-8 text-industrial-500 group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              
              <h4 className="text-xl font-display font-bold text-industrial-500 mb-4 group-hover:text-dark-950 transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed font-light group-hover:text-slate-600 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;