import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Nzthecrack',
    results: [
      'De 0 abonnés à 18k abonnés',
      'De 0 à 17k d\'euros en MRR en 30J',
      'Mclaren à 21 Ans'
    ],
    icon: Award,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    videoId: 'MHGsvXVargA',
    isShort: true
  },
  {
    name: 'Nabil',
    results: [
      'De 0 à 50 000 euros en 3 Mois',
      'S\'expatrie à Dubaï'
    ],
    icon: DollarSign,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    videoId: 'PRM7773N9S4',
    isShort: true
  },
  {
    name: 'Twistie',
    results: [
      'De 40K d\'abonné à +de 400k d\'abonnés',
      'Génère +5K par mois ACTUELLEMENT'
    ],
    icon: TrendingUp,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    videoId: 'mB-AezC3mec',
    isShort: false
  },
  {
    name: 'Matys',
    results: [
      'Lycéen travaillant avec moi',
      'Growth operateur à générer 20k MRR'
    ],
    icon: Users,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    videoId: 'rQA10M71Brw',
    isShort: false
  },
  {
    name: 'Kamiz',
    results: [
      '17 ans',
      '+de 20k abonnés sur tiktok',
      'Monétisation en moins de 30j'
    ],
    icon: TrendingUp,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/20',
    videoId: 'WIPtKms3E7A',
    isShort: true
  },
  {
    name: 'Benzi',
    results: [
      '+200K d\'abonnés à travers l\'ensemble de ses comptes',
      'Tous monétisés'
    ],
    icon: Award,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20',
    videoId: 'HhPmmRCchYU',
    isShort: true
  },
  {
    name: 'William',
    results: [
      '+100 euros par jour avec le Clipping',
      'En moins de 48H'
    ],
    icon: DollarSign,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    videoId: 'Ba1-85o-d6g',
    isShort: true
  },
  {
    name: 'Wassim',
    results: [
      'Lycéen',
      '+100 euros/jour avec le clipping',
      'En moins de 24h'
    ],
    icon: TrendingUp,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    videoId: 'WT8_8cZPwCc',
    isShort: true
  }
];

const Results = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 420; // Width of card + gap roughly
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-glow/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Résultats <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-primary-muted max-w-2xl mx-auto">
            Des résultats concrets, vérifiés et reproductibles. Rejoignez l'élite.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-all opacity-0 group-hover/carousel:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="snap-center shrink-0 w-[350px] sm:w-[400px]"
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="h-full bg-surfaceHighlight border border-white/5 rounded-[2rem] p-5 hover:border-white/20 transition duration-300 relative overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl flex flex-col">
                      
                      {/* Video Container - Enforced Vertical Aspect Ratio for Uniformity */}
                      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden mb-6 bg-black border border-white/5 shadow-inner">
                        <iframe 
                          src={`https://www.youtube.com/embed/${testimonial.videoId}?controls=1&rel=0&modestbranding=1`} 
                          title={`${testimonial.name} testimonial`}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* Content */}
                      <div className="px-1 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-5">
                          <div className={`w-12 h-12 rounded-2xl ${testimonial.bg} ${testimonial.border} border flex items-center justify-center shrink-0`}>
                            <Icon className={`w-6 h-6 ${testimonial.color}`} />
                          </div>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {testimonial.name}
                          </h3>
                        </div>
                        
                        <ul className="space-y-3 mt-auto">
                          {testimonial.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-primary-muted text-sm group-hover:text-white/90 transition-colors">
                              <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${testimonial.color.replace('text-', 'bg-')}`}></span>
                              <span className="leading-relaxed font-light text-base">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-white/20 to-white/10">
            <div className="bg-surfaceHighlight rounded-2xl px-10 py-8 backdrop-blur-xl">
              <p className="text-2xl font-bold text-white">
                Et vous ? Prêt à rejoindre ces{' '}
                <span className="text-gradient">
                  success stories
                </span>{' '}
                ?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
