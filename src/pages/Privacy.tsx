
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
            Datenschutzerklärung
          </motion.h1>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p>
              Stand: Mai 2024
            </p>
            <h2>1. Allgemeine Informationen</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Die DISRUPTIVE9 behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              DISRUPTIVE9<br />
              [Ihre Adresse]<br />
              [Ihre Kontaktdaten]
            </p>
            
            <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen Ihrer Kontaktanfrage freiwillig mitteilen. Wir verwenden die von Ihnen mitgeteilten Daten ausschließlich zur Bearbeitung Ihrer Anfragen.
            </p>
            
            <h2>4. Datensicherheit</h2>
            <p>
              Wir sichern unsere Website und sonstigen Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen.
            </p>
            
            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
