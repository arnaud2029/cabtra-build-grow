import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: "Quels documents recevrons-nous après paiement ?",
    answer: "Vous recevrez une attestation d'attribution, l'attestation de cession et, selon le site, un certificat foncier ou le titre foncier en cours. Un dossier complet vous est remis pour chaque lot avec tous les documents nécessaires pour la sécurité juridique de votre acquisition."
  },
  {
    question: "Quelle est la procédure pour réserver un lot ?",
    answer: "La réservation est simple : 1) Choisissez votre site et votre mode de paiement, 2) Contactez-nous via WhatsApp ou notre formulaire, 3) Effectuez l'acompte de réservation, 4) Notre équipe vous contacte sous 24h pour finaliser les détails et programmer la visite du terrain."
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer: "Nous acceptons le paiement cash complet ou par échelon. Pour les paiements échelonnés, vous versez un acompte initial (généralement 300.000 F) puis des mensualités de 100.000 F. Nous acceptons les virements bancaires, Mobile Money (Orange Money, MTN Money) et les espèces."
  },
  {
    question: "Que signifie « titre foncier en cours » ?",
    answer: "Cela signifie que la procédure d'obtention du titre foncier définitif est en cours auprès des autorités compétentes. En attendant, vous recevez un certificat foncier qui vous donne tous les droits de propriété. Nous accompagnons la procédure jusqu'à l'obtention du titre définitif."
  },
  {
    question: "Combien de temps dure la procédure de cession ?",
    answer: "La procédure complète de cession prend généralement entre 3 à 6 mois selon le site et le type de document. Dès votre premier paiement, vous recevez l'attestation d'attribution qui sécurise immédiatement vos droits sur le terrain."
  },
  {
    question: "Le site est-il viabilisé et habité ?",
    answer: "Cela dépend du site choisi. Zambakro est déjà viabilisé et habité avec infrastructures de base. Lolobo et N'Zere sont en cours de viabilisation. Nous vous informons précisément de l'état de chaque site avant votre choix. Tous nos sites sont accessibles et sécurisés."
  },
  {
    question: "Proposez-vous des solutions de construction après l'achat ?",
    answer: "Oui ! CABTRA-CI est un cabinet d'architecture complet. Nous proposons la confection de plans 2D et 3D, le suivi de construction, et tous les services techniques nécessaires. Nous pouvons vous accompagner de l'achat du terrain jusqu'à la remise des clés de votre maison."
  },
  {
    question: "Puis-je visiter le terrain avant l'achat ?",
    answer: "Absolument ! Nous organisons des visites guidées de tous nos sites chaque semaine. Contactez-nous pour programmer votre visite. Nous vous montrerons les limites exactes du lot, l'environnement, et répondrons à toutes vos questions sur place."
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non, nos prix sont transparents et tout compris. Le prix annoncé inclut le terrain, les frais de dossier, et les documents de base. Les seuls frais supplémentaires éventuels concernent des services optionnels comme l'accompagnement construction ou des documents spécifiques que vous pourriez demander."
  },
  {
    question: "Que se passe-t-il si je ne peux plus payer les mensualités ?",
    answer: "Nous sommes compréhensifs et flexibles. En cas de difficultés temporaires, contactez-nous immédiatement pour étudier un réaménagement de vos échéances. Nous privilégions toujours la discussion et la recherche de solutions adaptées à votre situation."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cabtra-orange text-white">FAQ</Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Questions 
            <span className="text-gradient-primary block">Fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Toutes les réponses aux questions que vous vous posez sur nos terrains, 
            nos services et nos procédures. Votre tranquillité d'esprit est notre priorité.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 text-left">
                  <span className="font-semibold text-cabtra-blue pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <div className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="font-poppins font-bold text-2xl mb-4">
                Encore des Questions ?
              </h3>
              <p className="mb-6 opacity-90">
                Notre équipe est là pour vous accompagner. Contactez-nous directement 
                via WhatsApp pour des réponses immédiates.
              </p>
              <button 
                className="btn-cabtra bg-white text-cabtra-blue hover:bg-gray-100"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. J\'ai des questions supplémentaires sur vos offres.')}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Chattez avec Nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;