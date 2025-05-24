"use client";
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Using solid for a filled checkmark

const siteVitrineBenefits = [
  {
    title: "Une vitrine accessible 24h/24 et 7j/7",
    description: "Votre entreprise est visible et accessible à tout moment, où que soient vos clients."
  },
  {
    title: "Crédibilité et image de marque professionnelle",
    description: "Un site soigné renforce la confiance et assoit votre professionnalisme."
  },
  {
    title: "Augmentation de la visibilité et acquisition de clients",
    description: "Attirez de nouveaux prospects et élargissez votre clientèle grâce au référencement."
  },
  {
    title: "Communication et interaction facilitées",
    description: "Partagez vos actualités, services et interagissez facilement avec votre audience."
  },
  {
    title: "Analyse et suivi des performances",
    description: "Mesurez l'impact de votre présence en ligne et optimisez vos stratégies."
  },
  {
    title: "Adaptabilité et évolution avec votre entreprise",
    description: "Un site web évolue avec vous, s'adaptant à vos nouveaux besoins et objectifs."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[var(--background)] text-[var(--text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
            Voici six avantages supplémentaires d'un site vitrine
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un site vitrine est bien plus qu'une simple présence en ligne. C'est un outil puissant pour développer votre activité, renforcer votre image de marque et atteindre vos objectifs commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Illustration */}
          <div 
            className="relative h-[300px] sm:h-[400px] md:h-[450px]"
          >
            <Image 
              src="/images/avantages-site-vitrine.png" // IMPORTANT: User needs to provide this image
              alt="Illustration des avantages d'un site vitrine"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Column: Benefits List */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          >
            {siteVitrineBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3"
              >
                <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-[var(--primary)] mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}