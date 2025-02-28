
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "KI-gestützte Sales-Automatisierung",
      description: "Implementierung einer intelligenten CRM-Lösung mit automatisiertem Lead-Scoring und Prognosemodellen.",
      client: "Finanzdienstleister",
      image: "/placeholder.svg"
    },
    {
      title: "Intelligente Kundenservice-Plattform",
      description: "Entwicklung eines KI-gesteuerten Support-Systems mit automatischer Anfragenklassifizierung und -bearbeitung.",
      client: "E-Commerce Unternehmen",
      image: "/placeholder.svg"
    },
    {
      title: "Automatisierte Dokumentenverarbeitung",
      description: "Implementierung eines Systems zur automatisierten Extraktion, Klassifizierung und Verarbeitung von Geschäftsdokumenten.",
      client: "Versicherungsunternehmen",
      image: "/placeholder.svg"
    },
    {
      title: "Smart Recruiting Plattform",
      description: "Entwicklung einer KI-basierten Lösung zur Optimierung des Recruitingprozesses mit automatischer Bewerbungsbewertung.",
      client: "Personaldienstleister",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <header className="container-padding py-12 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unsere Projekte
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Erfolgreiche Digitalisierung und Prozessoptimierung für unsere Kunden
          </motion.p>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Kunde: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-neutral-600">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
