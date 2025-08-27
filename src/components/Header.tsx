import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      {/* Top Info Bar */}
      <div className="bg-cabtra-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+225 0767053876</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>Yamoussoukro, Kokrenou Apsonic 1</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>CABTRA-CI Group - Cabinet d'Architecture & Topographie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-cabtra-blue">CABTRA-CI</h1>
              <p className="text-xs text-muted-foreground">Group SARL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
              Accueil
            </a>
            <a href="#offres" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
              Nos Offres
            </a>
            <a href="#services" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
              Contact
            </a>
            <Button className="btn-cabtra">
              Réserver Mon Lot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#accueil" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
                Accueil
              </a>
              <a href="#offres" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
                Nos Offres
              </a>
              <a href="#services" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-cabtra-orange transition-colors font-medium">
                Contact
              </a>
              <Button className="btn-cabtra w-full">
                Réserver Mon Lot
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;