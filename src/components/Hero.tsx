import React from 'react';
import { ArrowRight, MapPin, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSurveyor from '@/assets/hero-surveyor.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroSurveyor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          
          {/* Special Offer Badge */}
          <div className="inline-flex items-center bg-cabtra-orange/20 border border-cabtra-orange/30 rounded-full px-3 sm:px-6 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Promo Anniversaire CABTRA-CI!</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 leading-tight">
            <span className="text-gradient-accent">Terrain à vendre</span>
            <br />
            Yamoussoukro
            <br />
            CABTRA-CI !
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed px-2">
            <strong>Immobilier Yamoussoukro</strong> - Lotissement sécurisé 500 m²
            <br className="hidden sm:block" />
            <span className="sm:hidden"> - </span>
            Zambakro, Lolobo, Nzéré - <strong>Terrain pas cher</strong> dès 300.000F
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-10 px-2">
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">3 Sites</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">Titre Foncier</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">Paiement Échelonné</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="btn-cabtra group text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver Mon Lot
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-cabtra-outline text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir les Offres
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 px-2">
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-white/20">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-cabtra-orange mb-1 sm:mb-2">500m²</div>
              <div className="text-xs sm:text-sm opacity-80">Superficie</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-white/20">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-cabtra-orange mb-1 sm:mb-2">3+</div>
              <div className="text-xs sm:text-sm opacity-80">Sites</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center border border-white/20">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-cabtra-orange mb-1 sm:mb-2">500K</div>
              <div className="text-xs sm:text-sm opacity-80">FCFA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cabtra-orange/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl float-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;