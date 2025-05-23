"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const inputBaseClasses = "mt-1 block w-full rounded-md shadow-sm text-sm text-gray-200 bg-slate-700 border-slate-600 focus:ring-red-500 focus:border-red-500 placeholder-gray-400";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactDetails = [
    {
      icon: MapPinIcon,
      title: 'Adresse',
      details: '123 Rue de la Tech, Ville Lumière, 75000 Paris, France',
      linkText: 'Voir sur la carte',
      href: 'https://maps.google.com/?q=123+Rue+de+la+Tech,+Ville+Lumière,+75000+Paris,+France',
    },
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      details: '+33 1 23 45 67 89',
      linkText: 'Appelez-nous',
      href: 'tel:+33123456789',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'contact@codevista.fr',
      linkText: 'Envoyez-nous un email',
      href: 'mailto:contact@codevista.fr',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900 text-gray-200 dark:bg-black dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-Nous
          </h2>
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Une question, un projet ? N'hésitez pas à nous écrire. Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Form Section */}
          <motion.div variants={itemVariants} className="bg-slate-800 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom et prénom"
                  className={inputBaseClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@example.com"
                  className={inputBaseClasses}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="L'objet de votre message"
                  className={inputBaseClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez votre demande ici..."
                  className={`${inputBaseClasses} min-h-[120px]`}
                />
              </div>
              <motion.button
                type="submit"
                variants={itemVariants} // Re-using itemVariants for simplicity, or create a specific one
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#f43f5e] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-300"
              >
                Envoyer le Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants} // Stagger children if sectionVariants has staggerChildren
                className="flex items-start p-6 bg-slate-800 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="h-8 w-8 text-[#f43f5e] mr-5 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 dark:text-gray-400 mb-2">{item.details}</p>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#f43f5e] hover:text-red-400 transition-colors duration-300"
                  >
                    {item.linkText}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}