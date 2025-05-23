"use client";
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
  }

  return (
    <nav className="fixed w-full bg-[var(--background)] z-50 shadow-sm">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              Codevista
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="text-sm text-white hidden sm:block">
              <button className="font-semibold hover:text-gray-300 transition-colors">FR</button>
              <span className="text-gray-500 mx-1">|</span>
              <button className="text-gray-400 hover:text-white transition-colors">EN</button>
            </div>

            {/* Hamburger Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flyout Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="absolute w-full bg-gray-800 md:bg-opacity-95 backdrop-blur-sm shadow-lg overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Language switcher for small screens inside menu */}
          <div className="px-3 pt-3 pb-2 sm:hidden">
            <div className="text-sm text-white flex items-center justify-center space-x-2">
              <button className="font-semibold hover:text-gray-300 transition-colors p-1">FR</button>
              <span className="text-gray-500">|</span>
              <button className="text-gray-400 hover:text-white transition-colors p-1">EN</button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}