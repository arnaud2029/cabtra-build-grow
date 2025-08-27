import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    offer: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `
🏠 NOUVELLE DEMANDE DEPUIS LE SITE WEB

👤 Nom: ${formData.name}
📱 Téléphone: ${formData.phone}
📧 Email: ${formData.email}
🎯 Offre d'intérêt: ${formData.offer || 'Non spécifiée'}
💬 Message: ${formData.message}

Merci de me recontacter rapidement.
    `.trim();

    const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message envoyé !",
      description: "Votre demande a été transmise via WhatsApp. Nous vous recontactons sous 24h.",
    });

    // Reset form
    setFormData({ name: '', phone: '', email: '', offer: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-cabtra-blue text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cabtra-orange text-white">Contact</Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Contactez-Nous
            <span className="text-cabtra-orange block">Dès Maintenant</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="font-poppins font-bold text-2xl mb-8">
              Nos Coordonnées
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cabtra-orange rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <p className="opacity-90">+225 0767053876</p>
                      <p className="opacity-90">+225 0554926408</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cabtra-orange rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="opacity-90">cabtragroup54@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cabtra-orange rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="opacity-90">Yamoussoukro, Kokrenou</p>
                      <p className="opacity-90">Carrefour Apsonic 1 (Marché de la Fondation)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/CABTRAGROUPE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <button 
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. Je veux plus de renseignement sur vos produits.')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white text-cabtra-blue">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">
                  Envoyez-nous un Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Votre nom complet"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Votre téléphone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <select
                    className="w-full p-3 border rounded-md"
                    value={formData.offer}
                    onChange={(e) => setFormData({...formData, offer: e.target.value})}
                  >
                    <option value="">Sélectionnez une offre (optionnel)</option>
                    <option value="Zambakro - 500m²">Zambakro - 500m²</option>
                    <option value="Lolobo - 500m²">Lolobo - 500m²</option>
                    <option value="N'Zere - 500m²">N'Zere - 500m²</option>
                    <option value="Services Architecture">Services Architecture</option>
                    <option value="Services Topographie">Services Topographie</option>
                    <option value="Autre">Autre</option>
                  </select>
                  <Textarea
                    placeholder="Votre message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="btn-cabtra w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-500 rounded-2xl p-8">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Besoin d'une Réponse Immédiate ?
            </h3>
            <p className="mb-6 text-lg opacity-90">
              Contactez-nous directement sur WhatsApp pour une assistance rapide
            </p>
            <Button 
              className="bg-white text-green-500 hover:bg-gray-100 font-semibold px-8 py-4"
              onClick={() => {
                const whatsappUrl = `https://wa.me/2250767053876?text=${encodeURIComponent('Je viens de votre site web. Je veux plus de renseignement sur vos produits.')}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chattez sur WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;