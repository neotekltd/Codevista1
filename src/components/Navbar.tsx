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
    { name: 'Projets', href: '#projets' },
    { name: 'A Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  }

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
                Code<span className="text-[#f43f5e]">Vista</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Flyout Menu */}
      <motion.div 
        className={`fixed inset-0 z-50 md:hidden`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={mobileMenuOpen ? "visible" : "hidden"}
        style={{ backdropFilter: mobileMenuOpen ? 'blur(5px)' : 'none' }}
      >
        <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-gray-900 bg-opacity-95 shadow-xl ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6 space-y-1">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-white text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>
                  Code<span className="text-[#f43f5e]">Vista</span>
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
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