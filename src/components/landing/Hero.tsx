
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="container-padding py-12">
      {/* Hero content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-40 pb-32">
        <motion.h1 
          className="heading-xl mb-6 text-accent-teal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovationsagentur für digitale Prozessoptimierung
        </motion.h1>
        <motion.p 
          className="text-xl text-neutral-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Wir digitalisieren und vereinfachen Ihre Geschäftsprozesse mit KI-gestützten Lösungen für mehr Effizienz und Wettbewerbsfähigkeit.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-6 py-3 bg-accent-orange text-white rounded-lg 
                           hover:bg-accent-orange/90 transition-all duration-200
                           font-medium tracking-wide shadow-sm hover:shadow-md">
            Kontakt aufnehmen
          </button>
          <button className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-200/50 transition-colors">
            Mehr erfahren
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
