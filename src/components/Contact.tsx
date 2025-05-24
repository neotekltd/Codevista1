"use client";
import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const inputBaseClassesContact = "mt-1 block w-full rounded-md shadow-sm text-sm text-[var(--text)] bg-white border-gray-300 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-gray-500 py-2.5 px-3";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form submission logic
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
      title: 'Notre Adresse',
      details: '123 Rue de l\'Innovation, Technopole, Tunis, Tunisie',
      linkText: 'Voir sur Google Maps',
      href: 'https://maps.google.com/?q=123+Rue+de+l\'Innovation,+Technopole,+Tunis,+Tunisie',
    },
    {
      icon: PhoneIcon,
      title: 'Téléphone',
      details: '+216 71 000 000',
      linkText: 'Appelez-nous directement',
      href: 'tel:+21671000000',
    },
    {
      icon: EnvelopeIcon,
      title: 'Adresse Email',
      details: 'contact@votresite.tn',
      linkText: 'Envoyez-nous un e-mail',
      href: 'mailto:contact@votresite.tn',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Une question, un projet ou simplement envie de discuter ? N'hésitez pas à nous contacter. Notre équipe est prête à vous accompagner.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Form Section */}
          <div className="p-6 sm:p-8 rounded-lg shadow-xl bg-white/10 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
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
                  className={inputBaseClassesContact}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                  className={inputBaseClassesContact}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
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
                  className={inputBaseClassesContact}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
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
                  className={`${inputBaseClassesContact} min-h-[120px]`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[var(--primary)] px-6 py-3.5 rounded-md font-semibold text-base sm:text-lg shadow-md transition-colors duration-300 hover:scale-105 hover:bg-opacity-90 active:scale-95"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map Section */}
          <div className="space-y-8">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-md"
              >
                <item.icon className="h-7 w-7 text-white mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-90 mb-1.5">{item.details}</p>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-gray-200 font-medium transition-colors duration-300 underline hover:no-underline"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
            {/* Map Placeholder */}
            <div 
              className="h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-center p-4"
            >
              <p className="text-lg font-semibold text-gray-600">
                Emplacement de la carte interactive ici
                <br />
                <span className="text-sm font-normal">(Intégration Google Maps ou équivalent)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}