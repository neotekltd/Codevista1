"use client";
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left Column: Title and Paragraph */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-6">
              À propos de nous
            </h2>
            <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-5">
              <p>
                CodeVista a été fondée avec une vision claire : révolutionner l'interaction numérique pour les entreprises de toutes tailles. Dès nos débuts, nous avons mis l'accent sur l'innovation, la qualité et une approche centrée sur le client. 
              </p>
              <p>
                Nous avons commencé comme une petite équipe de passionnés de technologie, déterminés à créer des solutions web qui non seulement répondent aux attentes, mais les dépassent. Au fil des ans, nous avons grandi, évolué et affiné notre expertise, mais notre engagement initial envers l'excellence et la satisfaction client est resté inchangé. Chaque projet est une nouvelle opportunité de démontrer notre passion pour le digital.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div 
            className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-us-team.png" // IMPORTANT: User needs to provide this image
              alt="L'équipe CodeVista collaborant sur un projet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}