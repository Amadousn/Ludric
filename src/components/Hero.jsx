import { ArrowRight, CheckCircle2, Play, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-screen bg-background text-white overflow-hidden flex items-center justify-center py-20 lg:py-0">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-glow/20 blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge - 26MONEY ACADÉMIE - Premium Tech Design */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8 relative group"
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-glow via-accent-glow to-accent-glow rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Main badge container */}
            <div className="relative">
              {/* Inner glow border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-glow/30 via-accent-glow/10 to-accent-glow/30 rounded-2xl"></div>
              
              {/* Badge content */}
              <div className="relative px-8 py-3 bg-gradient-to-br from-surfaceHighlight to-black border border-accent-glow/50 rounded-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  {/* Animated dot */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-accent-glow shadow-[0_0_10px_rgba(255,193,7,0.8)]"
                  />
                  
                  {/* Text with gradient */}
                  <span className="text-base lg:text-lg font-black bg-gradient-to-r from-white via-accent-glow to-white bg-clip-text text-transparent tracking-[0.15em] uppercase">
                    26MONEY ACADÉMIE
                  </span>
                  
                  {/* Decorative element */}
                  <div className="w-8 h-[2px] bg-gradient-to-r from-accent-glow to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Headline - Sur une ligne pour économiser l'espace */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight tracking-tight"
          >
            Passez de 0 à <span className="text-gradient glow-text">5K/Mois</span> en 90 Jours
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-muted mb-4 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Une méthode éprouvée, un accompagnement sur mesure. <span className="text-white font-medium">Tout est fait pour vous.</span>
          </motion.p>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 relative group max-w-4xl mx-auto"
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

          {/* Guarantee - Minimalist & Stylish */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 max-w-4xl mx-auto flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 text-accent-glow mb-3 px-4 py-1.5 rounded-full bg-accent-glow/5 border border-accent-glow/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Garantie Contractuelle</span>
            </div>
            
            {/* Texte avec flèches de chaque côté */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Flèche gauche */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block"
              >
                <ArrowDown className="w-8 h-8 lg:w-10 lg:h-10 text-accent-glow" strokeWidth={2.5} />
              </motion.div>
              
              <p className="text-base sm:text-lg text-primary-muted font-light leading-relaxed">
                  Si l'objectif n'est pas atteint en <span className="text-white font-medium">90 jours</span>, 
                  nous vous versons <span className="text-accent-glow font-bold">500€</span>.
              </p>
              
              {/* Flèche droite */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="hidden sm:block"
              >
                <ArrowDown className="w-8 h-8 lg:w-10 lg:h-10 text-accent-glow" strokeWidth={2.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <button
                onClick={onCTAClick}
                className="group relative px-8 py-4 bg-accent-glow text-black font-bold text-lg rounded-full shadow-glow hover:shadow-[0_0_60px_-15px_rgba(255,193,7,0.5)] transition-all duration-300 hover:scale-105"
            >
                <span className="relative flex items-center gap-3">
                Réserver Mon Appel Gratuit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
