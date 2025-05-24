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

// Animation variants for page elements
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const pulseAnimation = {
  hidden: { scale: 0.95, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      yoyo: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

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

// Animation variants for filter buttons
const filterButtonVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Staggered container variant
const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PortfolioPage() {
  // Simulated filter categories for portfolio items (as seen in duck.design)
  const filterCategories = ['Tous', 'CMS', 'Design', 'Vitrine', 'E-commerce', 'UI', 'UX', 'Mobile'];
  const [activeFilter, setActiveFilter] = React.useState('Tous');
  
  return (
    <main className="relative bg-gradient-to-br from-[#f8f9fa] via-white to-[#e9ecef] text-[var(--text)] min-h-screen overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient Circle Top Right */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulseAnimation}
          className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--primary)] to-transparent opacity-10"
        />
        {/* Gradient Circle Bottom Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulseAnimation}
          className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[var(--secondary)] to-transparent opacity-5"
        />
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.header 
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          animate="visible"
          variants={staggeredContainerVariants}
        >
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Mon Portfolio</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Découvrez une sélection de mes réalisations, illustrant mon expertise en développement web et design.
          </motion.p>
          
          {/* Filter Categories - Similar to duck.design */}
          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                variants={filterButtonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.header>

        {portfolioItems.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            animate="visible"
            variants={staggeredContainerVariants}
          >
            {portfolioItems.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden group flex flex-col transform-gpu"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                custom={index * 0.1}
              >
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  {/* Image with hover effect */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col bg-white dark:bg-slate-800">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-block bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 text-[var(--primary)] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-slate-700 flex items-center space-x-3">
                    {project.liveLink && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-medium transition-all duration-300"
                      >
                        Voir le site
                      </motion.a>
                    )}
                    {project.caseStudyLink && project.liveLink && (
                       <span className="text-gray-400 dark:text-gray-600">|</span>
                    )}
                    {project.caseStudyLink && (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.caseStudyLink}
                        className="text-sm bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent font-medium transition-all duration-300"
                      >
                        Étude de cas
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
              Mon portfolio est en cours de construction.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Revenez bientôt pour découvrir mes projets !
            </p>
          </motion.div>
        )}

        {/* "Interested?" CTA Section - Inspired by screenshot */}
        <motion.section 
          className="relative py-20 md:py-28 text-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggeredContainerVariants}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-0 bottom-0 -mb-20 -mr-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent"></div>
            <div className="absolute left-0 top-0 -mt-10 -ml-10 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[var(--secondary)]/10 to-transparent"></div>
          </div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Intéressé(e) par une collaboration ?
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Discutons de votre projet et voyons comment nous pouvons atteindre vos objectifs ensemble.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-lg font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg"
            >
              Contactez-moi
            </motion.a>
          </motion.div>
        </motion.section>

        {/* "Awards/Recognition" Section - Inspired by screenshot */}
        <motion.section 
          className="py-16 md:py-20 border-t border-gray-200 dark:border-slate-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggeredContainerVariants}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Reconnu par les leaders de l'industrie
            </span>
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
            variants={staggeredContainerVariants}
          >
            {/* Logo cards with modern styling */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="p-6 bg-white dark:bg-slate-800/40 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-slate-700/50 transition-all duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 1 (e.g., Clutch)</p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="p-6 bg-white dark:bg-slate-800/40 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-slate-700/50 transition-all duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 2 (e.g., Upwork)</p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="p-6 bg-white dark:bg-slate-800/40 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 dark:border-slate-700/50 transition-all duration-300"
            >
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Logo Placeholder 3 (e.g., Sortlist)</p>
            </motion.div>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
