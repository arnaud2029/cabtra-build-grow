import React from 'react';
import { Phone, Mail, MapPin, Facebook, MessageSquare, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cabtra-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cabtra-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">CABTRA-CI</h3>
                <p className="text-sm opacity-80">Group SARL</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Cabinet d'Architecture du Bâtiment de la Topographie et des Recherches Agronomiques. 
              Votre partenaire de confiance pour l'immobilier et l'agriculture en Côte d'Ivoire.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/CABTRAGROUPE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button 
                onClick={() => {
                  const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. Je veux plus de renseignement sur vos produits.')}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nos Offres */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Nos Offres</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#offres" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Terrains Zambakro (500m²)
                </a>
              </li>
              <li>
                <a href="#offres" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Terrains Lolobo (500m²)
                </a>
              </li>
              <li>
                <a href="#offres" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Terrains N'Zere (500m²)
                </a>
              </li>
              <li>
                <a href="#offres" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Paiement Cash & Échelon
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Architecture & Construction
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Topographie & Foncier
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Agriculture & Élevage
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                  Accompagnement Client
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-cabtra-orange" />
                <div>
                  <p className="opacity-90">+225 0767053876</p>
                  <p className="opacity-90">+225 0554926408</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-cabtra-orange" />
                <p className="opacity-90">cabtragroup54@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-cabtra-orange" />
                <div>
                  <p className="opacity-90">Yamoussoukro, Kokrenou</p>
                  <p className="opacity-90">Carrefour Apsonic 1</p>
                  <p className="opacity-90">(Marché de la Fondation)</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="btn-cabtra w-full mt-4"
              onClick={() => {
                const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. Je veux plus de renseignement sur vos produits.')}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Direct
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {new Date().getFullYear()} CABTRA-CI Group SARL. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors">
                Mentions Légales
              </a>
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-1 opacity-80 hover:opacity-100 hover:text-cabtra-orange transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Haut de page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;