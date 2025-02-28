
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Intelligente Prozessoptimierung",
      description: "Analysieren, optimieren und automatisieren Sie Ihre Geschäftsprozesse mit KI-gestützten Tools und Technologien.",
      points: ["Workflow-Analyse & Optimierung", "Prozessautomatisierung", "Datengesteuerte Entscheidungen"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "KI-Integration für Unternehmen",
      description: "Implementieren Sie maßgeschneiderte KI-Lösungen, die präzise auf Ihre Geschäftsanforderungen zugeschnitten sind.",
      points: ["KI-gestützte Datenanalyse", "Intelligente Automatisierung", "Prädiktive Analysen"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-orange/10 text-accent-orange px-4 py-1.5 rounded-full text-sm font-medium">
            UNSERE LEISTUNGEN
          </span>
          <h2 className="heading-lg mt-6">Supercharge Your Workflows</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Entfesseln Sie das volle Potenzial Ihres Unternehmens mit unseren innovativen Digitallösungen.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-orange" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <button className="button-primary">Kontakt aufnehmen</button>
                <button className="px-6 py-3 text-neutral-600 hover:text-primary transition-colors">
                  Mehr Informationen
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-6 rounded-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
