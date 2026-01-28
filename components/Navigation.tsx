'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'À propos', href: '#about' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Réservation', href: '#reservation' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-lg shadow-lg border-b border-border-light' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className={`font-serif text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#hero')}
              style={{ cursor: 'pointer' }}
            >
              Le Jardin Secret
              <span className="block text-sm font-normal opacity-80">Restaurant Français</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
                    isScrolled ? 'text-text-dark' : 'text-white'
                  } hover:text-primary`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#reservation')}
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>

          {/* Quick Info (Desktop) */}
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden lg:flex items-center justify-center py-2 border-t border-border-light text-xs text-text-gray space-x-6"
            >
              <div className="flex items-center space-x-1">
                <MapPin size={12} />
                <span>123 rue de la Gastronomie, Paris 8ème</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={12} />
                <span>+33 1 45 67 89 10</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>12h-14h, 19h-23h (Fermé Lundi)</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-cream shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="font-serif text-2xl font-bold text-primary">
                    Le Jardin Secret
                    <span className="block text-sm font-normal opacity-80">Restaurant Français</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-text-gray hover:text-primary transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block w-full text-left text-text-dark hover:text-primary transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/5"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.button
                  onClick={() => scrollToSection('#reservation')}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-medium uppercase tracking-wide hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Réserver une table
                </motion.button>

                {/* Mobile Info */}
                <div className="mt-8 p-4 bg-secondary/10 rounded-lg space-y-3 text-sm text-text-gray">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-secondary" />
                    <span>123 rue de la Gastronomie, 75008 Paris</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-secondary" />
                    <span>+33 1 45 67 89 10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-secondary" />
                    <span>Mardi-Dimanche: 12h-14h, 19h-23h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
