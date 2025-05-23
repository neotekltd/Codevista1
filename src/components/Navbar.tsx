"use client";
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Realisations', href: '#projects' }, // Renamed from Projets
    { name: 'Blog', href: '#blog' }, // Added Blog
    { name: 'A Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  }

  return (
    <nav className="bg-[var(--background)] shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-[var(--text)] text-2xl font-bold">
                Code<span className="text-[var(--primary)]">Vista</span>
            </Link>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Phone and Quote Button - Desktop */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a href="tel:+33123456789" className="text-[var(--text)] text-sm mr-6 hover:text-[var(--primary)] transition-colors duration-300">
              +33 1 23 45 67 89
            </a>
            <Link
              href="#contact"
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white text-sm font-semibold py-2 px-4 rounded-md transition-colors duration-300 shadow-sm"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-[var(--text)] hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Flyout Menu */} 
      <motion.div 
        className={`fixed inset-0 z-50 md:hidden`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={mobileMenuOpen ? "visible" : "hidden"}
        style={{ backdropFilter: mobileMenuOpen ? 'blur(5px)' : 'none' }}
      >
        <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[var(--background)] shadow-xl ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6 space-y-1">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-[var(--text)] text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                  Code<span className="text-[var(--primary)]">Vista</span>
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text)] hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 text-base font-medium text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}