
import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/embed/49450873.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

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
            Kontaktieren Sie uns
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Wir beraten Sie gerne zu Ihrem individuellen Digitalisierungsprojekt
          </motion.p>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-accent-teal">Ihre Anfrage</CardTitle>
                <CardDescription>Teilen Sie uns Ihr Anliegen mit, und wir melden uns zeitnah bei Ihnen.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* HubSpot Form */}
                <div 
                  className="hs-form-frame" 
                  data-region="na1" 
                  data-form-id="ad84b4db-c0d7-4bda-bb0e-97566bfb8672" 
                  data-portal-id="49450873"
                ></div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-teal">Oder kontaktieren Sie uns direkt</h3>
            <p className="text-neutral-600 mb-4">
              Rufen Sie uns an oder schreiben Sie eine E-Mail
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="tel:+491234567890" className="text-accent-orange hover:underline">
                +49 123 456 7890
              </a>
              <span className="hidden md:inline text-neutral-400">|</span>
              <a href="mailto:kontakt@disruptive9.de" className="text-accent-orange hover:underline">
                kontakt@disruptive9.de
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
