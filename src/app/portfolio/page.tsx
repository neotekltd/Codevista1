"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Define a type for a portfolio project (example structure)
interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Path to the main image, e.g., /images/portfolio/project-a.jpg
  tags: string[]; // e.g., ['Next.js', 'TypeScript', 'Web Design']
  liveLink?: string; // Optional link to live project
  caseStudyLink?: string; // Optional link to a more detailed case study page or section
}

// Placeholder data - replace with your actual projects
const portfolioItems: PortfolioProject[] = [
  // Example item (remove or replace)
  {
    id: 'example-project-1',
    title: 'Exemple de Projet 1',
    description: 'Ceci est une brève description du premier projet. Plus de détails peuvent être ajoutés ici ou sur une page de cas d\'étude dédiée.',
    imageUrl: '/images/placeholder-600x400.png', // Replace with actual image path
    tags: ['React', 'Node.js', 'Illustration'],
    liveLink: '#',
    caseStudyLink: '/portfolio/example-project-1' // Example link to a sub-page
  },
  // Add more projects here...
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text)] leading-tight mb-4">
            Mon Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, illustrant mon expertise en développement web et design.
          </p>
        </header>

        {portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {portfolioItems.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index} // Can be used for staggered animations if desired later
              >
                <div className="relative w-full h-56 sm:h-64">
                  {/* It's better to use Next/Image here if images are local */}
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--text)] mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block bg-gray-200 dark:bg-slate-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-slate-700 flex items-center space-x-3">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors duration-300"
                      >
                        Voir le site
                      </a>
                    )}
                    {project.caseStudyLink && project.liveLink && (
                       <span className="text-gray-400 dark:text-gray-600">|</span>
                    )}
                    {project.caseStudyLink && (
                      <a 
                        href={project.caseStudyLink} 
                        className="text-sm text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors duration-300"
                      >
                        Étude de cas
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
              Mon portfolio est en cours de construction.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Revenez bientôt pour découvrir mes projets !
            </p>
          </div>
        )}

        {/* "Interested?" CTA Section - Inspired by screenshot */}
        <section className="py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-6">
            Intéressé(e) par une collaboration ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Discutons de votre projet et voyons comment nous pouvons atteindre vos objectifs ensemble.
          </p>
          <a
            href="#contact" // Assuming you have a contact section with this ID on the homepage or a contact page
            className="inline-block bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-lg font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
          >
            Contactez-moi
          </a>
        </section>

        {/* "Awards/Recognition" Section - Inspired by screenshot */}
        <section className="py-12 md:py-16 border-t border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] text-center mb-10 md:mb-12">
            Reconnu par les leaders de l'industrie
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Placeholder for logos - replace with actual <img> or <Image> tags */}
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 1 (e.g., Clutch)</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 2 (e.g., Upwork)</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-slate-800 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 3 (e.g., Sortlist)</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
