
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
            Allgemeine Geschäftsbedingungen
          </motion.h1>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              Stand: Mai 2024
            </p>
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der DISRUPTIVE9 und ihren Kunden.
            </p>
            
            <h2>2. Vertragsschluss</h2>
            <p>
              Der Vertrag kommt durch Angebot und Annahme zustande. Angebote von DISRUPTIVE9 sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.
            </p>
            
            <h2>3. Leistungsumfang</h2>
            <p>
              Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung des Angebots, der Auftragsbestätigung und diesen AGB.
            </p>
            
            <h2>4. Vergütung und Zahlungsbedingungen</h2>
            <p>
              Die Vergütung für die erbrachten Leistungen richtet sich nach den vereinbarten Preisen. Zahlungen sind innerhalb von 14 Tagen nach Rechnungserhalt ohne Abzug fällig.
            </p>
            
            <h2>5. Haftung</h2>
            <p>
              DISRUPTIVE9 haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten betroffen sind.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
