'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <MapPin className="text-accent" size={20} />
              <h3 className="text-xl font-serif font-semibold">Adresse</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              15 rue de la Paix<br />
              75011 Paris<br />
              France
            </p>
          </motion.div>

          {/* Horaires */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <Clock className="text-accent" size={20} />
              <h3 className="text-xl font-serif font-semibold">Horaires</h3>
            </div>
            <div className="text-white/80 space-y-1">
              <p>Mar-Sam: 12h-14h30 / 19h-22h30</p>
              <p>Dimanche: 12h-15h</p>
              <p>Lundi: Fermé</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <Phone className="text-accent" size={20} />
              <h3 className="text-xl font-serif font-semibold">Contact</h3>
            </div>
            <div className="text-white/80 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>01 42 00 00 00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@jardinsecret.fr</span>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 pt-4">
              <motion.a 
                href="#" 
                className="bg-accent/20 p-2 rounded-full hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-accent/20 p-2 rounded-full hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-white/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            © 2024 Le Jardin Secret. Tous droits réservés. | 
            <a href="#" className="hover:text-accent transition-colors duration-300 ml-2">
              Mentions légales
            </a> | 
            <a href="#" className="hover:text-accent transition-colors duration-300 ml-2">
              Politique de confidentialité
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
