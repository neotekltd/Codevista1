import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

const navigation = {
  main: [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'GitHub', href: '#', icon: FaGithub },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text">
              CodeVista
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transforming ideas into powerful digital solutions. We create modern,
              innovative, and user-friendly applications that drive business growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.2, color: '#f43f5e' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            {new Date().getFullYear()} CodeVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}