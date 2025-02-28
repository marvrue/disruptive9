
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent-orange rounded-full"></div>
              <span className="text-xl font-semibold">DISRUPTIVE9</span>
            </div>
            <p className="text-neutral-600 text-sm">
              Digitalisierung und Prozessoptimierung mit KI
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent-teal">Leistungen</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/projects" className="hover:text-accent-orange transition-colors">Projekte</Link></li>
              <li><Link to="/pricing" className="hover:text-accent-orange transition-colors">Preise</Link></li>
              <li><Link to="/contact" className="hover:text-accent-orange transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-teal">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/about" className="hover:text-accent-orange transition-colors">Über uns</Link></li>
              <li><Link to="/blog" className="hover:text-accent-orange transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-accent-orange transition-colors">Karriere</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-teal">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/privacy" className="hover:text-accent-orange transition-colors">Datenschutz</Link></li>
              <li><Link to="/terms" className="hover:text-accent-orange transition-colors">AGB</Link></li>
              <li><Link to="/imprint" className="hover:text-accent-orange transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © 2024 DISRUPTIVE9. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-accent-orange transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-neutral-600 hover:text-accent-orange transition-colors">
              Twitter
            </a>
            <a href="#" className="text-neutral-600 hover:text-accent-orange transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
