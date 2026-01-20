import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, User, ArrowRight, Lock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-glow/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-surfaceHighlight border border-white/5 mb-8 shadow-glow-sm">
            <Calendar className="w-8 h-8 text-accent-glow" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Vérifier les <span className="text-gradient">disponibilités</span>
          </h2>
          <p className="text-xl text-primary-muted max-w-2xl mx-auto font-light">
            Réservez votre appel stratégique. Places limitées.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-3xl p-1"
        >
          <div className="bg-surface/80 backdrop-blur-xl rounded-[22px] p-8 sm:p-12 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary-muted ml-1">
                    Nom complet
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-primary-dark group-focus-within:text-accent-glow transition-colors" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-4 bg-surfaceHighlight border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-glow/50 focus:border-accent-glow/50 transition-all duration-300 text-white placeholder-primary-dark outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary-muted ml-1">
                    Email professionnel
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-primary-dark group-focus-within:text-accent-glow transition-colors" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-4 bg-surfaceHighlight border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-glow/50 focus:border-accent-glow/50 transition-all duration-300 text-white placeholder-primary-dark outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-primary-muted ml-1">
                  Téléphone
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-primary-dark group-focus-within:text-accent-glow transition-colors" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 bg-surfaceHighlight border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-glow/50 focus:border-accent-glow/50 transition-all duration-300 text-white placeholder-primary-dark outline-none"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full relative group overflow-hidden bg-white text-black font-bold text-lg py-5 rounded-xl shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-glow via-accent-purple to-accent-glow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  Vérifier les Disponibilités
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-sm text-primary-dark">
                <Lock className="w-4 h-4" />
                <p>Vos informations sont sécurisées et confidentielles</p>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <p className="text-white font-semibold mb-1 group-hover:text-accent-glow transition-colors">Appel gratuit</p>
                  <p className="text-sm text-primary-muted">30 minutes</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold mb-1 group-hover:text-accent-glow transition-colors">Sans engagement</p>
                  <p className="text-sm text-primary-muted">Aucune obligation</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold mb-1 group-hover:text-accent-glow transition-colors">Réponse rapide</p>
                  <p className="text-sm text-primary-muted">Sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceHighlight border border-white/5 text-sm text-primary-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Places limitées cette semaine
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
