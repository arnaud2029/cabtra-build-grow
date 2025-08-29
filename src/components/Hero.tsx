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
          <div className="inline-flex items-center bg-cabtra-orange/20 border border-cabtra-orange/30 rounded-full px-6 py-2 mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Offre Spéciale Fête des Mères - KDO Exceptionnel!</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-gradient-accent">Terrain à vendre</span>
            <br />
            Yamoussoukro
            <br />
            CABTRA-CI !
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            <strong>Immobilier Yamoussoukro</strong> - Lotissement sécurisé 500 m²
            <br />
            Zambakro, Lolobo, Nzéré - <strong>Terrain pas cher</strong> dès 300.000F
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>3 Sites Disponibles</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 mr-2" />
              <span>Titre Foncier Sécurisé</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Paiement Échelonné</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-cabtra group text-lg px-8 py-4"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver Mon Lot
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-cabtra-outline text-lg px-8 py-4"
              onClick={() => document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir les Offres
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-cabtra-orange mb-2">500m²</div>
              <div className="text-sm opacity-80">Superficie Standard</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-cabtra-orange mb-2">3+</div>
              <div className="text-sm opacity-80">Sites Disponibles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-cabtra-orange mb-2">500K</div>
              <div className="text-sm opacity-80">À partir de (FCFA)</div>
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