import React from 'react';
import { MapPin, FileText, CreditCard, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import landPlots from '@/assets/land-plots.jpg';

interface Offer {
  id: string;
  site: string;
  lots: number;
  area: string;
  cashPrice: string;
  installmentPrice: string;
  downPayment: string;
  monthlyPayment: string;
  duration: string;
  documents: string[];
  status: 'available' | 'limited' | 'coming-soon';
  highlight?: string;
}

const offers: Offer[] = [
  {
    id: '1',
    site: 'ZAMBAKRO',
    lots: 75,
    area: '500 m²',
    cashPrice: '1.500.000 F',
    installmentPrice: '2.000.000 F',
    downPayment: '300.000 F',
    monthlyPayment: '100.000 F',
    duration: '18 mois',
    documents: ['Certificat Foncier Disponible', 'Site Viabilisé et Habité'],
    status: 'available',
    highlight: 'OFFRE 1 - PREMIUM'
  },
  {
    id: '2',
    site: 'LOLOBO',
    lots: 50,
    area: '500 m²',
    cashPrice: '1.000.000 F',
    installmentPrice: '1.500.000 F',
    downPayment: '300.000 F',
    monthlyPayment: '100.000 F',
    duration: '12 mois',
    documents: ['Certificat Foncier Disponible', 'Titre Foncier en Cours'],
    status: 'available',
    highlight: 'OFFRE 2 - POPULAIRE'
  },
  {
    id: '3',
    site: "N'ZERE",
    lots: 60,
    area: '500 m²',
    cashPrice: '1.000.000 F',
    installmentPrice: '1.500.000 F',
    downPayment: '300.000 F',
    monthlyPayment: '100.000 F',
    duration: '12 mois',
    documents: ['Titre Foncier en Cours'],
    status: 'limited',
    highlight: 'OFFRE 3 - OPPORTUNITÉ'
  }
];

const OffersSection = () => {
  const handleReservation = (site: string) => {
    const whatsappMessage = `Bonjour! Je viens de votre site web et je souhaite réserver un lot à ${site}. Merci de me contacter.`;
    const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="offres" className="section-padding bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cabtra-orange text-white">Nos Offres Exclusives</Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Terrains Disponibles à 
            <span className="text-gradient-primary block">Yamoussoukro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos offres exceptionnelles de terrains de 500m² dans les meilleurs sites 
            de Yamoussoukro. Paiement cash ou par échelon selon vos besoins.
          </p>
        </div>

        {/* Special Promotion Banner */}
        <div className="bg-gradient-accent rounded-2xl p-6 md:p-8 mb-12 text-white text-center">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-4">
            🎉 Bonne Fête des Mères - KDO Spécial ! 🎉
          </h3>
          <p className="text-lg opacity-90">
            Réservez maintenant et bénéficiez d'un cadeau exceptionnel pour toutes les mères !
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer) => (
            <Card 
              key={offer.id} 
              className={`card-hover relative overflow-hidden ${
                offer.status === 'limited' ? 'border-cabtra-orange' : ''
              }`}
            >
              {/* Status Badge */}
              {offer.status === 'limited' && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-cabtra-orange text-white">Lots Limités</Badge>
                </div>
              )}

              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url(${landPlots})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-cabtra-blue text-white">{offer.highlight}</Badge>
                </div>
                <CardTitle className="font-poppins text-2xl text-cabtra-blue mb-2">
                  {offer.site}
                </CardTitle>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{offer.lots} lots de {offer.area} disponibles</span>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Pricing */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gradient-card rounded-lg">
                    <span className="font-medium">Prix Cash:</span>
                    <span className="font-bold text-cabtra-blue text-lg">{offer.cashPrice}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-card rounded-lg">
                    <span className="font-medium">Prix Échelon:</span>
                    <span className="font-bold text-cabtra-orange text-lg">{offer.installmentPrice}</span>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Modalités de Paiement:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {offer.downPayment} premier versement
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {offer.monthlyPayment}/mois sur {offer.duration}
                  </p>
                </div>

                {/* Documents */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Documents:
                  </h4>
                  {offer.documents.map((doc, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-3 h-3 mr-2 text-green-500" />
                      {doc}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="btn-cabtra w-full"
                  onClick={() => handleReservation(offer.site)}
                >
                  Je veux ce lot
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-cabtra-blue text-white rounded-2xl p-8 text-center">
          <h3 className="font-poppins font-bold text-2xl mb-4">
            Comment ça marche ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-cabtra-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-2">Choisissez votre site</h4>
              <p className="text-sm opacity-80">Sélectionnez parmi nos 3 sites disponibles</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-cabtra-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-2">Choisissez votre paiement</h4>
              <p className="text-sm opacity-80">Cash ou par échelon selon vos moyens</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-cabtra-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold mb-2">Obtenez vos documents</h4>
              <p className="text-sm opacity-80">Recevez tous les documents légaux</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="btn-cabtra-outline border-white text-white hover:bg-white hover:text-cabtra-blue"
              onClick={() => {
                const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. Je veux plus de renseignement sur vos produits.')}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Parler à un Conseiller
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;