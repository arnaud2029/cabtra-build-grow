import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, FileCheck, Sparkles, Gift, Check, Star, Phone } from 'lucide-react';

const PromoBanner = () => {
  const documents = [
    "Attestation d'Attribution",
    "Attestation de cession",
    "Extrait topo",
    "Acte de vente",
    "Certificat foncier",
    "Titre foncier garantie (en cours)"
  ];

  const handleContactWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour CABTRA-CI ! Je suis intéressé par la Promo Anniversaire sur le site de Yamoussoukro-N'Zéré (INPHB). Pouvez-vous me donner plus d'informations ?"
    );
    window.open(`https://wa.me/2250708900000?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Confetti/Stars decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Star 
            key={i} 
            className="absolute text-yellow-400/40 fill-yellow-400/30 animate-pulse" 
            size={i % 3 === 0 ? 20 : 14}
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-6">
            <Badge className="bg-accent text-white px-6 py-2 text-sm font-semibold animate-bounce shadow-lg">
              <Gift className="w-4 h-4 mr-2" />
              OFFRE LIMITÉE
            </Badge>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 md:p-10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Main Info */}
              <div className="text-white space-y-6">
                {/* Title with sparkles */}
                <div className="relative">
                  <Sparkles className="absolute -top-4 -left-2 w-8 h-8 text-yellow-400 animate-pulse" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Promo Anniversaire
                    <span className="block text-accent mt-2">CABTRA-CI GROUPE</span>
                  </h2>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">YAMOUSSOUKRO - N'ZÉRÉ</p>
                    <p className="text-white/80 text-sm">Proche INPHB</p>
                  </div>
                </div>

                {/* Price Highlight */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                    <p className="text-white/90 text-sm uppercase tracking-wider mb-1">Prix exceptionnel</p>
                    <p className="text-4xl md:text-5xl font-extrabold text-white">
                      1 500 000 <span className="text-2xl">FCFA</span>
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-2 text-white/90">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                        500m² - 600m²
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Documents */}
              <div className="space-y-5">
                <div className="bg-white/95 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg">Documents Disponibles</h3>
                      <p className="text-muted-foreground text-sm">Sécurité juridique garantie</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground font-medium text-sm md:text-base">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={handleContactWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Réserver Maintenant via WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom urgency text */}
          <p className="text-center text-white/90 mt-6 text-sm md:text-base font-medium animate-pulse">
            ⚡ Offre valable jusqu'à épuisement des lots disponibles ⚡
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
