import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || `New Portfolio Contact from ${formData.name}`,
            message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-950" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-16">
             <h2 id="contact-heading" className="text-industrial-500 font-mono text-sm uppercase tracking-widest font-bold mb-3">Get In Touch</h2>
             <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Contact Me</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-6">Let's discuss your project</h4>
            <p className="text-slate-400 mb-8">
                You can reach out to me through any of the methods below and I'll be glad to discuss your project details or job offer.
            </p>

            <div className="space-y-6">
                <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    aria-label={`Send an email to ${CONTACT_INFO.email}`}
                >
                    <div className="bg-industrial-500/10 p-3 rounded-full text-industrial-500 group-hover:bg-industrial-500 group-hover:text-dark-950 transition-colors">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</p>
                        <p className="text-white font-medium">{CONTACT_INFO.email}</p>
                    </div>
                </a>

                <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    aria-label={`Call ${CONTACT_INFO.phone}`}
                >
                     <div className="bg-industrial-500/10 p-3 rounded-full text-industrial-500 group-hover:bg-industrial-500 group-hover:text-dark-950 transition-colors">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Phone</p>
                        <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
                    </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                    <div className="bg-industrial-500/10 p-3 rounded-full text-industrial-500">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Address</p>
                        <p className="text-white font-medium">{CONTACT_INFO.address}</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
             <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Hidden Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-industrial-500 focus:ring-2 focus:ring-industrial-500 transition-all placeholder:text-slate-600"
                            placeholder="Your Name"
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-industrial-500 focus:ring-2 focus:ring-industrial-500 transition-all placeholder:text-slate-600"
                            placeholder="your@email.com"
                            disabled={status === 'submitting'}
                        />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-industrial-500 focus:ring-2 focus:ring-industrial-500 transition-all placeholder:text-slate-600"
                        placeholder="Project Inquiry"
                        disabled={status === 'submitting'}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">Message</label>
                    <textarea 
                        id="message" 
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-industrial-500 focus:ring-2 focus:ring-industrial-500 transition-all resize-none placeholder:text-slate-600"
                        placeholder="Tell me about your project..."
                        disabled={status === 'submitting'}
                    />
                </div>

                <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                        status === 'success' 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : status === 'error'
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-industrial-500 hover:bg-industrial-400 text-dark-950'
                    }`}
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : status === 'success' ? (
                        <>
                            <CheckCircle className="h-5 w-5" />
                            Message Sent!
                        </>
                    ) : status === 'error' ? (
                        <>
                            <AlertCircle className="h-5 w-5" />
                            Failed to Send. Try again.
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="h-5 w-5" />
                        </>
                    )}
                </button>
             </form>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] border-y border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                title="Map location of Port Harcourt, Nigeria"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
      </div>
    </section>
  );
};

export default Contact;