'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Star, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center bg-fixed" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
      >
        {/* Chef Star Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-dark px-4 py-2 rounded-full mb-6 animate-pulse-slow"
        >
          <Star className="w-4 h-4 fill-white text-white" />
          <span className="text-sm font-medium uppercase tracking-wide">Chef Étoilé Michelin</span>
          <Star className="w-4 h-4 fill-white text-white" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          Le Jardin Secret
          <span className="block text-4xl md:text-5xl lg:text-6xl font-normal mt-2 opacity-90">Restaurant Français</span>
        </motion.h1>
        
        {/* Subtitle with typewriter effect */}
        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
        >
          <span className="italic text-accent">L'excellence de la cuisine française</span>
          <span className="block">dans un cadre d'exception</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button 
            onClick={() => scrollToSection('#reservation')}
            className="group relative bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg uppercase tracking-wide hover:shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Réserver maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            onClick={() => scrollToSection('#menu')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg uppercase tracking-wide hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir le menu
          </motion.button>
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-80"
        >
          <div className="flex items-center gap-2">
            <span className="text-accent">★</span>
            <span>4.9/5 Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">📍</span>
            <span>Paris 8ème</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">🔥</span>
            <span>Cuisine gastronomique</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollToSection('#menu')}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-wide opacity-80">Scorrere</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  )
}
