"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[var(--background)] relative overflow-hidden py-16 md:py-24">
      {/* Red circular background element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: -200 }}
        animate={{ opacity: 1, scale: 1, x: -50 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute -left-[20rem] -top-[10rem] w-[50rem] h-[50rem] sm:w-[60rem] sm:h-[60rem] md:w-[70rem] md:h-[70rem] bg-[#f43f5e] rounded-full opacity-20 md:opacity-25 pointer-events-none z-0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Image Section (Left on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] order-1 md:order-1"
          >
            <Image
              src="/images/hero-phones.png" // IMPORTANT: User needs to provide this image
              alt="Deux smartphones affichant des exemples d'applications mobiles modernes sur un fond d'arc rouge"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          {/* Text Content Section (Right on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="space-y-6 order-2 md:order-2 text-center md:text-left"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Digital, Tendances & Mobile
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Développez vos <br className="hidden sm:block" />
              outils digitaux
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
              Notre équipe de pointe vous accompagne à la création de solutions digitales sur mesure pour relever vos challenges et magnifier vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(244, 63, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f43f5e] text-white px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg shadow-md hover:bg-red-700 transition-colors duration-300"
                aria-label="Contactez-nous pour discuter de votre projet"
              >
                CONTACTEZ-NOUS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[var(--background)] transition-colors duration-300"
                aria-label="En savoir plus sur nos services"
              >
                EN SAVOIR +
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}