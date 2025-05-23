// src/components/Footer.tsx
"use client";

import Link from 'next/link';

// Navigation links for the footer
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Projets', href: '/#projects' },
  { name: 'À Propos', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 dark:bg-gray-900 dark:text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">VotreEntreprise</h3>
            <p className="text-sm mb-4">
              Votre slogan accrocheur ici. Nous transformons vos idées en réalité numérique.
            </p>
            {/* Placeholder for social media icons */}
            <p className="text-sm mt-4">Suivez-nous (icônes à ajouter).</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul role="list" className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-[var(--primary)] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contactez-nous</h3>
            <address className="text-sm not-italic space-y-2">
              <p>123 Rue Imaginaire<br />VilleExemple, CP 00000</p>
              <p>
                Téléphone: <a href="tel:+1234567890" className="hover:text-[var(--primary)] transition-colors duration-300">(123) 456-7890</a>
              </p>
              <p>
                Email: <a href="mailto:info@votrentreprise.com" className="hover:text-[var(--primary)] transition-colors duration-300">info@votrentreprise.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} VotreEntreprise. Tous droits réservés.
          </p>
          <p className="text-sm mt-1">
            <Link href="/mentions-legales" className="hover:text-[var(--primary)] transition-colors duration-300">
              Mentions Légales
            </Link>
            {' - '}
            <Link href="/politique-de-confidentialite" className="hover:text-[var(--primary)] transition-colors duration-300">
              Politique de Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}