
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Intelligente Kundenservice-Plattform",
      description: "Entwicklung eines KI-gesteuerten Support-Systems mit automatischer Anfragenklassifizierung und -bearbeitung.",
      client: "E-Commerce Unternehmen",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Automatisierte Dokumentenverarbeitung",
      description: "Implementierung eines Systems zur automatisierten Extraktion, Klassifizierung und Verarbeitung von Geschäftsdokumenten.",
      client: "Versicherungsunternehmen",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Smart Recruiting Plattform",
      description: "Entwicklung einer KI-basierten Lösung zur Optimierung des Recruitingprozesses mit automatischer Bewerbungsbewertung.",
      client: "Personaldienstleister",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Kunde: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 overflow-hidden rounded-md mb-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
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
