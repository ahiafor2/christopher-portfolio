import React from 'react';
import { ABOUT_DATA, ASSETS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-950" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-4 left-4 w-full h-full border-2 border-industrial-500/20 rounded-lg"></div>
            {/* Fixed: grayscale-0 (color) by default, hover:grayscale (B&W) on hover */}
            <div className="relative rounded-lg overflow-hidden grayscale-0 hover:grayscale transition-all duration-500">
                <img 
                    src={ASSETS.PROFILE} 
                    alt="Christopher Nwosu" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                    loading="lazy"
                    width="800"
                    height="1067"
                />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
               <span className="h-1 w-10 bg-industrial-500"></span>
               <h2 id="about-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest font-bold">About Me</h2>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-8">
                Driving safe, efficient, and reliable engineering solutions.
            </h3>
            
            <div className="space-y-6 text-slate-400 font-light leading-relaxed">
              {ABOUT_DATA.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Solid Control Specialist', 'Electrical Engineering', 'Risk Management', 'Project Support'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-industrial-500 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-300 text-sm font-medium">{skill}</span>
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;