
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Imprint = () => {
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
            Impressum
          </motion.h1>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              DISRUPTIVE9<br />
              [Straße Nr.]<br />
              [PLZ Stadt]
            </p>
            
            <h2>Kontakt</h2>
            <p>
              Telefon: [Ihre Telefonnummer]<br />
              E-Mail: kontakt@disruptive9.de
            </p>
            
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Ihre USt-IdNr.]
            </p>
            
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name]<br />
              [Straße Nr.]<br />
              [PLZ Stadt]
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Imprint;
