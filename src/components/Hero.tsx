"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const inputBaseClasses = "block w-full rounded-md shadow-sm text-sm text-[var(--text)] bg-white border-gray-300 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-gray-400";

  return (
    <>
      {/* Top Hero Section */}
      <section className="bg-[var(--background)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-center">
            {/* Image Section (Left on Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative h-[350px] sm:h-[450px] md:h-[500px] order-1 md:order-1"
            >
              <Image
                src="/images/hero-person-laptop.png" // IMPORTANT: User needs to provide this image
                alt="Personne utilisant un ordinateur portable pour des solutions web"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Text Content Section (Right on Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="space-y-8 order-2 md:order-2 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text)] leading-tight">
                Besoin d'une <br className="hidden sm:block" />solution Web ?
              </h1>
              
              <div className="space-y-6 md:space-y-0 md:flex md:space-x-6 pt-4">
                {/* Card 1: Site Vitrine */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex-1"
                >
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Site Vitrine</h3>
                  <p className="text-sm text-gray-600">À partir de <span className="font-bold">XXX</span> TND</p>
                </motion.div>

                {/* Card 2: Site E-commerce */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex-1"
                >
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">Site E-commerce</h3>
                  <p className="text-sm text-gray-600">À partir de <span className="font-bold">YYY</span> TND</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Hero Section - Project Evaluation */}
      <section className="bg-[var(--primary)] py-12 md:py-16 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Évaluation gratuite de votre projet
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90">
            Laissez-nous vos informations et nous vous contacterons rapidement pour discuter de votre projet et vous fournir une estimation personnalisée.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="text-left">
              <label htmlFor="hero-name" className="block text-sm font-medium mb-1">Nom et prénom</label>
              <input type="text" id="hero-name" name="name" placeholder="Votre nom complet" className={`${inputBaseClasses} py-2.5`} />
            </div>
            <div className="text-left">
              <label htmlFor="hero-email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="hero-email" name="email" placeholder="Votre adresse e-mail" className={`${inputBaseClasses} py-2.5`} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--primary)' }}
              whileTap={{ scale: 0.95 }}
              className="md:col-span-2 bg-white text-[var(--primary)] px-8 py-3 rounded-md font-semibold text-base sm:text-lg shadow-md transition-colors duration-300 w-full md:w-auto md:justify-self-center"
            >
              VALIDER
            </motion.button>
          </form>
        </motion.div>
      </section>
    </>
  );
}