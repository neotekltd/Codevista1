"use client";
import { motion } from "framer-motion";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  MagnifyingGlassCircleIcon,
  MegaphoneIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Sites web sur mesure',
    description: 'Des sites vitrines et e-commerce performants, optimisés pour une expérience utilisateur exceptionnelle.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Applications mobiles',
    description: 'Développement d\'applications iOS et Android natives ou hybrides, intuitives et engageantes.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Solutions e-commerce',
    description: 'Création de boutiques en ligne robustes et évolutives pour maximiser vos ventes et votre croissance.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Optimisation SEO',
    description: 'Améliorez votre visibilité en ligne et attirez plus de trafic qualifié grâce à nos stratégies SEO éprouvées.',
    icon: MagnifyingGlassCircleIcon,
  },
  {
    title: 'Marketing digital',
    description: 'Stratégies de marketing numérique complètes pour renforcer votre présence en ligne et atteindre vos objectifs.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Hébergement et maintenance',
    description: 'Solutions d\'hébergement fiables et services de maintenance proactifs pour assurer la pérennité de vos projets.',
    icon: ServerStackIcon,
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900 text-gray-200 dark:bg-black dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Des solutions digitales complètes pour propulser votre entreprise vers de nouveaux sommets.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="bg-slate-800 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <service.icon className="h-12 w-12 text-[#f43f5e] mb-5" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}