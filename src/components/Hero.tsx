"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
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

export default function Hero() {
  const inputBaseClasses = "block w-full rounded-md shadow-sm text-sm text-[var(--text)] bg-white border-gray-300 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-gray-400";

  return (
    <>
      {/* Top Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-white to-[#e9ecef] py-20 md:py-28">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Gradient Circle Top Right */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pulseAnimation}
            className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[var(--primary)] to-transparent opacity-10"
          />
          {/* Gradient Circle Bottom Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pulseAnimation}
            className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[var(--secondary)] to-transparent opacity-10"
          />
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Image Section (Left on Desktop) */}
            <motion.div
              variants={fadeInUp}
              className="relative h-[350px] sm:h-[450px] md:h-[500px] order-1 md:order-1 rounded-2xl overflow-hidden shadow-2xl shadow-[rgba(0,0,0,0.1)] transform rotate-1"
            >
              <Image
                src="/images/hero-main-graphic.png" // User needs to provide this image
                alt="Visuel principal de la section héros"
                fill
                className="object-contain z-10 scale-110"
                priority
              />
              {/* Image overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(0,116,217,0.15)] z-20"></div>
            </motion.div>

            {/* Text Content Section (Right on Desktop) */}
            <motion.div
              variants={fadeInUp}
              className="space-y-8 order-2 md:order-2 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">Besoin d'une</span> <br className="hidden sm:block" />
                <span className="text-[var(--text)]">solution Web ?</span>
              </h1>
              
              <motion.div 
                className="space-y-6 md:space-y-0 md:flex md:space-x-6 pt-4"
                variants={staggerContainer}
              >
                {/* Card 1: Site Vitrine */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-6 bg-white rounded-xl shadow-xl border border-gray-100 flex-1 relative overflow-hidden transition-all duration-300"
                >
                  {/* Card Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                  <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#4A90E2]">Site Vitrine</h3>
                  <p className="text-sm text-gray-600">À partir de <span className="font-bold">XXX</span> TND</p>
                </motion.div>

                {/* Card 2: Site E-commerce */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="p-6 bg-white rounded-xl shadow-xl border border-gray-100 flex-1 relative overflow-hidden transition-all duration-300"
                >
                  {/* Card Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></div>
                  <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary)] to-[#FF725C]">Site E-commerce</h3>
                  <p className="text-sm text-gray-600">À partir de <span className="font-bold">YYY</span> TND</p>
                </motion.div>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                variants={fadeInUp}
                className="pt-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block py-3 px-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Obtenir un devis gratuit
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Hero Section - Project Evaluation */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[var(--primary)] via-[#1e88e5] to-[#0d47a1] py-16 md:py-20 text-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Floating shapes */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pulseAnimation}
            className="absolute bottom-[-50px] right-[10%] w-[150px] h-[150px] rounded-full bg-white opacity-5"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pulseAnimation}
            className="absolute top-[20%] left-[5%] w-[100px] h-[100px] rounded-full bg-white opacity-5"
          />
          
          {/* Subtle wave pattern */}
          <div className="absolute bottom-0 left-0 w-full h-20 opacity-10" 
               style={{
                 backgroundImage: 'url("/images/wave-pattern.svg")', 
                 backgroundRepeat: 'repeat-x',
                 backgroundSize: 'contain'
               }}>
          </div>
        </div>
        
        <div 
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Évaluation gratuite de votre projet
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-lg mb-10 opacity-90 max-w-2xl mx-auto"
            >
              Laissez-nous vos informations et nous vous contacterons rapidement pour discuter de votre projet et vous fournir une estimation personnalisée.
            </motion.p>
            
            <motion.form 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            >
              <div className="text-left">
                <label htmlFor="hero-name" className="block text-sm font-medium mb-2 text-white/90">Nom et prénom</label>
                <input 
                  type="text" 
                  id="hero-name" 
                  name="name" 
                  placeholder="Votre nom complet" 
                  className="block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm text-sm text-white placeholder-white/50 py-3 px-4 focus:ring-white/30 focus:border-white/30 transition-all duration-300" 
                />
              </div>
              
              <div className="text-left">
                <label htmlFor="hero-email" className="block text-sm font-medium mb-2 text-white/90">Email</label>
                <input 
                  type="email" 
                  id="hero-email" 
                  name="email" 
                  placeholder="Votre adresse e-mail" 
                  className="block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm text-sm text-white placeholder-white/50 py-3 px-4 focus:ring-white/30 focus:border-white/30 transition-all duration-300" 
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="md:col-span-2 bg-white text-[var(--primary)] px-8 py-3 rounded-xl font-semibold text-base sm:text-lg shadow-xl transition-all duration-300 w-full md:w-auto md:justify-self-center hover:bg-opacity-95"
              >
                OBTENIR MON DEVIS
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}