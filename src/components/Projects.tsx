"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const projectsData = [
  {
    title: 'Plateforme E-commerce Innovante',
    category: 'Développement Web',
    description: 'Solution e-commerce moderne avec gestion des stocks en temps réel et interface utilisateur intuitive.',
    image: '/images/projects/ecommerce-showcase.jpg',
    tags: ['Next.js', 'Node.js', 'Stripe'],
    url: '#project-ecommerce',
  },
  {
    title: 'Application Mobile de Santé',
    category: 'Développement Mobile',
    description: 'Application mobile pour la prise de rendez-vous médicaux et le suivi des patients.',
    image: '/images/projects/healthapp-showcase.jpg',
    tags: ['React Native', 'Firebase', 'UX/UI'],
    url: '#project-healthapp',
  },
  {
    title: 'Tableau de Bord Financier',
    category: 'Data Visualisation',
    description: 'Plateforme de visualisation de données financières en temps réel pour une prise de décision éclairée.',
    image: '/images/projects/finance-dashboard-showcase.jpg',
    tags: ['React', 'D3.js', 'API Rest'],
    url: '#project-finance',
  },
  {
    title: 'Réseau Social d’Entreprise',
    category: 'Plateforme Communautaire',
    description: 'Plateforme communautaire avec messagerie instantanée et partage de fichiers sécurisé.',
    image: '/images/projects/social-network-showcase.jpg',
    tags: ['Vue.js', 'GraphQL', 'Sécurité'],
    url: '#project-social',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Nos Réalisations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez quelques-uns des projets qui illustrent notre savoir-faire et notre passion pour l'innovation digitale.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Static content overlay at the bottom (title, category) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent pointer-events-none">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1 truncate" title={project.title}>{project.title}</h3>
                <p className="text-sm font-medium text-[#f43f5e]">{project.category}</p>
              </div>

              {/* Hover overlay (link/button) */}
              <Link href={project.url} legacyBehavior>
                <a className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer">
                  <span
                    className="px-6 py-3 bg-[#f43f5e] text-white text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
                  >
                    Voir le projet
                  </span>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}