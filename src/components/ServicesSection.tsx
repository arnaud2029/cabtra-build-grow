import React from 'react';
import { Building2, Map, Tractor, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import constructionSite from '@/assets/construction-site.jpg';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Architecture & Construction',
    description: 'Confection de plans 2D et 3D, construction, réhabilitation et rénovation',
    features: ['Plans architecturaux', 'Suivi de chantier', 'Rénovation complète', 'Conseil technique']
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Topographie & Foncier',
    description: 'Études topographiques, bornage et accompagnement dans les procédures foncières',
    features: ['Levés topographiques', 'Bornage de terrain', 'Procédures foncières', 'Expertise foncière']
  },
  {
    icon: <Tractor className="w-8 h-8" />,
    title: 'Agriculture & Élevage',
    description: 'Recherches agronomiques, conseils agricoles et développement de projets d\'élevage',
    features: ['Études agronomiques', 'Conseils agricoles', 'Projets d\'élevage', 'Formation technique']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Accompagnement Client',
    description: 'Suivi personnalisé de votre projet de A à Z avec notre équipe d\'experts',
    features: ['Conseil personnalisé', 'Suivi de projet', 'Assistance technique', 'Service après-vente']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cabtra-blue text-white">Nos Services</Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient-primary">CABTRA-CI Immobilier</span>
            <br />
            Spécialiste Terrain Yamoussoukro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>Agence immobilière Yamoussoukro</strong> spécialisée dans la vente terrain sécurisé. 
            Promotion immobilière Côte d'Ivoire - Lotissement Zambakro, Lolobo, Nzéré avec accompagnement complet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="font-poppins text-xl text-cabtra-blue">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-cabtra-orange rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Showcase */}
        <div className="bg-gradient-to-r from-cabtra-blue to-cabtra-blue-light rounded-2xl overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="font-poppins font-bold text-3xl mb-6">
                Pourquoi Choisir CABTRA-CI ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cabtra-orange rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expertise Reconnue</h4>
                    <p className="text-sm opacity-90">Plus de 10 ans d'expérience dans l'immobilier et l'agriculture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cabtra-orange rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Accompagnement Complet</h4>
                    <p className="text-sm opacity-90">De l'achat du terrain à la construction, nous vous accompagnons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cabtra-orange rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sécurité Juridique</h4>
                    <p className="text-sm opacity-90">Tous nos terrains sont sécurisés avec documents légaux</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cabtra-orange rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexibilité de Paiement</h4>
                    <p className="text-sm opacity-90">Solutions adaptées à tous les budgets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-full">
              <img 
                src={constructionSite} 
                alt="CABTRA-CI Services" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cabtra-blue/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cabtra-orange mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cabtra-orange mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Lots Vendus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cabtra-orange mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cabtra-orange mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Légal & Sécurisé</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;