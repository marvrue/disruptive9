
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const About = () => {
  const teamMembers = [
    {
      name: "Marvin Rützel",
      role: "Gründer & Geschäftsführer",
      bio: "Mit über 10 Jahren Erfahrung in der Realwirtschaft und OpEx-Specialist für digitale Transformation und KI-Implementation.",
      image: "/placeholder.svg"
    },
    {
      name: "Julia Schneider",
      role: "Leiterin Prozessoptimierung",
      bio: "Expertin für Workflow-Optimierung und Implementierung von schlanken Geschäftsprozessen.",
      image: "/placeholder.svg"
    },
    {
      name: "Thomas Müller",
      role: "KI-Strategieberater",
      bio: "Spezialist für die Integration von KI-Lösungen in bestehende Unternehmensstrukturen.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Becker",
      role: "Lead Developer",
      bio: "Leitet die technische Umsetzung unserer maßgeschneiderten Digitalisierungsprojekte.",
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
            Über DISRUPTIVE9
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Wir revolutionieren Geschäftsprozesse durch Innovation und KI-gestützte Digitalisierung
          </motion.p>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Unsere Vision</h2>
            <p className="text-neutral-600 mb-4">
              Bei DISRUPTIVE9 glauben wir an die transformative Kraft der Digitalisierung und künstlichen Intelligenz. Unser Ziel ist es, Unternehmen jeder Größe dabei zu unterstützen, ihre Prozesse zu optimieren, Effizienz zu steigern und im digitalen Zeitalter wettbewerbsfähig zu bleiben.
            </p>
            <p className="text-neutral-600">
              Wir haben es uns zur Aufgabe gemacht, komplexe Technologien zugänglich zu machen und echten Mehrwert für unsere Kunden zu schaffen – durch maßgeschneiderte Lösungen, die genau auf ihre individuellen Bedürfnisse zugeschnitten sind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-200">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-accent-purple text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
