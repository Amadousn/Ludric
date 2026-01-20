import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-screen bg-background text-white overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-glow/20 blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-glow to-accent-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <span className="relative px-6 py-2.5 bg-surfaceHighlight border border-white/10 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse"></span>
              Programme Arsenal De La Liberté
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tighter"
          >
            Passez de 0 à <br className="hidden sm:block" />
            <span className="text-gradient glow-text">
              5K/Mois
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 text-primary-muted font-normal">
              en 90 Jours
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-primary-muted mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Une méthode éprouvée, un accompagnement sur mesure.
            <br />
            <span className="text-white font-medium">Tout est fait pour vous.</span>
          </motion.p>

          {/* Guarantee Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card rounded-2xl p-1 mb-12 max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="bg-surface/50 rounded-xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-glow to-transparent opacity-50"></div>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-accent-glow/10 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-glow" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Garantie de Résultat
                </h3>
              </div>
              <p className="text-primary-muted text-left pl-[3.25rem]">
                Si l'objectif n'est pas atteint en 90 jours, nous vous versons <span className="text-white font-bold">500€</span> pour le temps perdu. 
                <span className="block text-sm text-primary-dark mt-1">Contractualisé et garanti.</span>
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16 relative group max-w-4xl mx-auto"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-accent-glow to-accent-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative aspect-video bg-surfaceHighlight border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/otd4i7tf72?playbar=false&fullscreenButton=false&autoPlay=false" 
                  title="Wistia video player" 
                  allow="autoplay; fullscreen" 
                  allowFullScreen 
                  className="w-full h-full"
                  frameBorder="0"
                ></iframe>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <button
                onClick={onCTAClick}
                className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-glow via-accent-purple to-accent-glow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                Réserver Mon Appel Gratuit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
            </button>
            <p className="text-primary-dark text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Quelques créneaux disponibles cette semaine
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
