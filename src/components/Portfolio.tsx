import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowRight, X } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus Trap Logic
  useEffect(() => {
    if (!selectedItem) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    // Focus first element when modal opens
    if (firstElement) firstElement.focus();

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [selectedItem]);

  return (
    <section id="portfolio" className="py-24 bg-dark-900" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 id="portfolio-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest font-bold mb-3">Portfolio</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Case Studies</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Real-life verifiable case studies demonstrating expertise in troubleshooting, repair, and operational optimization.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.map((item, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white/[0.04] border border-industrial-500/50 transition-all duration-300 rounded-lg shadow-xl shadow-black/20 -translate-y-1 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <h4 className="text-xl font-display font-bold text-white mb-4 group-hover:text-dark-950 transition-colors">{item.title}</h4>
              <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm group-hover:text-slate-600 transition-colors flex-grow">{item.summary}</p>
              
              <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center text-industrial-500 font-bold uppercase tracking-wider text-xs hover:text-industrial-700 transition-colors"
                    aria-label={`View details for ${item.title}`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-dark-900 border border-white/10 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-dark-900/95 backdrop-blur z-10 border-b border-white/10 p-6 flex justify-between items-start">
                  <h3 id="modal-title" className="text-xl sm:text-2xl font-display font-bold text-white pr-8">{selectedItem.title}</h3>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
              </div>

              <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-industrial-500 font-bold uppercase tracking-wider text-sm mb-2">Problem</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedItem.fullDetails.problem}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-bold mb-3">Diagnosis</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm">
                        {selectedItem.fullDetails.diagnosis.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-3">Solution</h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm">
                        {selectedItem.fullDetails.solution.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6">
                    <h4 className="text-industrial-500 font-bold uppercase tracking-wider text-sm mb-4">Outcome & Impact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <p className="font-semibold text-white mb-2 text-sm">Results</p>
                            <ul className="text-slate-400 text-sm space-y-1">
                                {selectedItem.fullDetails.outcome.map((point, i) => <li key={i}>• {point}</li>)}
                            </ul>
                         </div>
                         <div>
                            <p className="font-semibold text-white mb-2 text-sm">Business Impact</p>
                             <ul className="text-slate-400 text-sm space-y-1">
                                {selectedItem.fullDetails.businessImpact.map((point, i) => <li key={i}>• {point}</li>)}
                            </ul>
                         </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;