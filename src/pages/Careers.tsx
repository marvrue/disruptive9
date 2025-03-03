
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <header className="container-padding py-12 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="heading-lg mb-6 text-accent-teal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Karriere bei DISRUPTIVE9
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Werden Sie Teil unseres innovativen Teams
          </motion.p>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-neutral-600">
              Derzeit haben wir keine offenen Stellen. Bitte schauen Sie zu einem späteren Zeitpunkt wieder vorbei.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
