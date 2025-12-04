import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-950 relative" aria-labelledby="experience-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 id="experience-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest font-bold mb-3">Career Path</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Work Experience & Education</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center gap-3 mb-6">
               <Briefcase className="text-industrial-500" aria-hidden="true" />
               <h4 className="text-xl font-bold text-white uppercase tracking-wide">Work History</h4>
            </div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
              {EXPERIENCE_DATA.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-industrial-500 ring-4 ring-dark-950" aria-hidden="true"></span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h5 className="text-xl font-bold text-white">{job.company}</h5>
                    <div className="flex items-center text-industrial-500 font-mono text-xs uppercase tracking-wider mt-1 sm:mt-0">
                        <Calendar className="h-3 w-3 mr-2" aria-hidden="true" />
                        {job.period}
                    </div>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-2 h-1 w-1 bg-white/30 rounded-full" aria-hidden="true"></span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-8">
               <GraduationCap className="text-industrial-500" aria-hidden="true" />
               <h4 className="text-xl font-bold text-white uppercase tracking-wide">Education</h4>
            </div>

            <div className="space-y-6">
                {EDUCATION_DATA.map((edu, index) => (
                    <div 
                      key={index} 
                      className="group p-6 bg-white/[0.04] border border-industrial-500/50 transition-all duration-300 rounded-lg shadow-xl shadow-black/20 -translate-y-1 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <h5 className="text-lg font-display font-bold text-white mb-2 leading-tight group-hover:text-dark-950 transition-colors">{edu.title}</h5>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-wider group-hover:text-slate-600 transition-colors">{edu.institution}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 bg-industrial-500/5 rounded-lg border border-industrial-500/10">
                <h4 className="text-industrial-500 font-bold uppercase tracking-wider text-sm mb-4">Professional Development</h4>
                <div className="flex flex-wrap gap-2">
                    {[
                        "HSE Practices",
                        "Centrifuge Repairs",
                        "Engine Maintenance",
                        "First Aid",
                        "Firefighting",
                        "Quality Control"
                    ].map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-dark-950 rounded text-[10px] text-slate-400 border border-white/10">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;