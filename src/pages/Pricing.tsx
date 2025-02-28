
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      description: "Ideal für kleine Unternehmen und Startups",
      price: "€1.990",
      features: [
        "Prozessanalyse (1 Abteilung)",
        "Basis-Automatisierung",
        "E-Mail Support",
        "Monatlicher Statusbericht"
      ]
    },
    {
      title: "Business",
      description: "Für mittelständische Unternehmen",
      price: "€4.990",
      popular: true,
      features: [
        "Umfassende Prozessanalyse (3 Abteilungen)",
        "Erweiterte Automatisierung",
        "KI-basierte Optimierungsvorschläge",
        "Vorrangiger Support",
        "Wöchentlicher Statusbericht"
      ]
    },
    {
      title: "Enterprise",
      description: "Maßgeschneiderte Lösungen für Großunternehmen",
      price: "Individuell",
      features: [
        "Ganzheitliche Unternehmensanalyse",
        "Vollständige Prozessautomatisierung",
        "Dedizierter Account Manager",
        "24/7 Premium Support",
        "Individuelle KI-Integration",
        "Strategische Beratung"
      ]
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
            Transparente Preisgestaltung
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Wählen Sie das passende Paket für Ihre Digitalisierungsprojekte
          </motion.p>
        </div>
      </header>

      <section className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className={`h-full ${plan.popular ? 'border-accent-purple' : ''}`}>
                {plan.popular && (
                  <div className="bg-accent-purple text-white text-center py-1 text-sm font-medium">
                    Beliebt
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Individuell" && <span className="text-neutral-600 ml-2">/ Projekt</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <button className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'button-secondary' : 'button-primary'}`}>
                    Kontakt aufnehmen
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
