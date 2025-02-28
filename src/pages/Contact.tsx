
import { useState } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Hier würde die tatsächliche Kontaktformular-Logik implementiert werden
  };

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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vor- und Nachname" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@firma.de" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Firmenname" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht</Label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wie können wir Ihnen helfen?" 
                      className="w-full h-32 px-3 py-2 text-sm rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required 
                    />
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-accent-orange text-white rounded-lg 
                           hover:bg-accent-orange/90 transition-all duration-200
                           font-medium tracking-wide shadow-sm hover:shadow-md">
                    Anfrage senden
                  </button>
                </form>
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
