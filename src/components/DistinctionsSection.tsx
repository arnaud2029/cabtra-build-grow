import React, { useState } from 'react';
import { Award, Star, Trophy, Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/lovable-uploads/distinction-1.jpeg', alt: 'KONAN Yao Joel avec le Super Prix National Éléphant d\'Or' },
  { src: '/lovable-uploads/distinction-2.jpeg', alt: 'Remise du prix par le Président BANI Gilbert' },
  { src: '/lovable-uploads/distinction-3.jpeg', alt: 'Les distinctions et trophées OPAJEF' },
  { src: '/lovable-uploads/distinction-4.jpeg', alt: 'Équipe CABTRA-CI avec les distinctions' },
  { src: '/lovable-uploads/distinction-5.jpeg', alt: 'Cérémonie de remise des prix OPAJEF' },
  { src: '/lovable-uploads/distinction-6.jpeg', alt: 'Président National OPAJEF M. BANI Gilbert' },
  { src: '/lovable-uploads/distinction-7.jpeg', alt: 'Directeur Général CABTRA-CI Group' },
];

const DistinctionsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="distinctions" className="py-20 bg-gradient-to-br from-cabtra-blue via-blue-900 to-cabtra-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-cabtra-orange rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cabtra-orange/20 rotate-45"></div>
      </div>

      {/* Golden sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-400/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            size={Math.random() * 20 + 10}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-cabtra-blue px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg animate-bounce">
            <Trophy className="w-6 h-6" />
            <span>DISTINCTION HONORIFIQUE</span>
            <Trophy className="w-6 h-6" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
              Super Prix National
            </span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins flex items-center justify-center gap-4">
            <span className="text-yellow-400">🏆</span>
            ÉLÉPHANT D'OR
            <span className="text-yellow-400">🏆</span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-lg">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-yellow-400" />
              Vendredi 16 janvier 2026
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-yellow-400" />
              Yamoussoukro
            </span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-cabtra-blue" />
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Décerné par</p>
                <p className="text-white font-bold text-xl">OPAJEF</p>
                <p className="text-white/80 text-sm">Organisation Panafricaine de la Jeunesse Francophone</p>
              </div>
            </div>

            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                <span className="text-yellow-400 font-semibold">J'ai eu l'honneur de recevoir</span>, ce vendredi 16 janvier 2026 à Yamoussoukro, le <strong className="text-yellow-400">Super Prix National Éléphant d'Or</strong>, décerné par l'Organisation Panafricaine de la Jeunesse Francophone (OPAJEF).
              </p>
              
              <p>
                Cette distinction m'honore profondément et vient reconnaître un <strong className="text-yellow-400">engagement collectif</strong>, une vision et un travail portés au quotidien au sein de <strong className="text-cabtra-orange">CABTRA CI Group</strong>.
              </p>

              <p>
                J'adresse mes sincères remerciements au <strong>Président National de l'OPAJEF, M. BANI Gilbert</strong>, ainsi qu'à l'ensemble des membres de l'organisation, aux personnalités présentes, à la société civile et aux médias pour cette marque d'estime.
              </p>

              <div className="bg-gradient-to-r from-yellow-400/20 to-cabtra-orange/20 rounded-xl p-6 border-l-4 border-yellow-400">
                <p className="italic font-medium">
                  "Cette reconnaissance renforce ma détermination à poursuivre mon engagement en faveur du <strong className="text-yellow-400">développement</strong>, de l'<strong className="text-yellow-400">entrepreneuriat</strong> et de la <strong className="text-yellow-400">jeunesse africaine</strong>."
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cabtra-orange to-yellow-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-yellow-400">
                KYJ
              </div>
              <div>
                <p className="text-white font-bold text-xl">KONAN Yao Joel</p>
                <p className="text-yellow-400">Directeur Général - CABTRA CI Group</p>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-cabtra-orange to-yellow-400 rounded-3xl opacity-30 blur-xl animate-pulse"></div>
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/50 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(0)}
            >
              <img 
                src="/lovable-uploads/distinction-1.jpeg" 
                alt="KONAN Yao Joel avec le Super Prix National Éléphant d'Or"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cabtra-blue/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-yellow-400 font-bold text-xl">Super Prix National Éléphant d'Or 2026</p>
                <p className="text-white">CABTRA CI Group - Excellence reconnue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3">
            <Star className="w-6 h-6 text-yellow-400" />
            Moments de la cérémonie
            <Star className="w-6 h-6 text-yellow-400" />
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {images.slice(1).map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:z-10"
                onClick={() => openLightbox(index + 1)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cabtra-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button 
              className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-50"
              onClick={closeLightbox}
            >
              <X size={40} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-white/10 p-3 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={32} />
            </button>
            
            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors bg-white/10 p-3 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-medium text-lg">{images[currentImage].alt}</p>
              <p className="text-yellow-400">{currentImage + 1} / {images.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DistinctionsSection;
