'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Star, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-text-dark to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Accroche */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">
                Le Jardin Secret
                <span className="block text-lg font-normal opacity-80">Restaurant Français</span>
              </h3>
              <p className="text-white/80 italic">
                L'excellence de la cuisine française
              </p>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-white/80">4.9/5 sur Google</span>
            </div>

            {/* Social Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm font-medium mb-2">Suivez notre actualité</p>
              <p className="text-xs text-white/70">@lejardinsecret.paris</p>
            </div>
          </motion.div>

          {/* Coordonnées */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-semibold mb-4">Coordonnées</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">123 rue de la Gastronomie</p>
                  <p className="text-white/70">75008 Paris</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/90">+33 1 45 67 89 10</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/90">contact@lejardinsecret-paris.fr</p>
              </div>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-semibold mb-4">Horaires</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Lundi</span>
                <span className="text-primary font-medium">Fermé</span>
              </div>
              
              <div className="py-2 border-b border-white/10">
                <p className="text-white/90 font-medium">Mardi - Dimanche</p>
                <div className="text-white/70 text-sm mt-1">
                  <p>Déjeuner : 12h - 14h30</p>
                  <p>Dîner : 19h - 23h</p>
                </div>
              </div>
            </div>

            {/* Special Info */}
            <div className="bg-accent/10 rounded-xl p-3 border border-accent/20">
              <p className="text-sm font-medium text-accent">
                🌿 Jardin privé pour événements
              </p>
            </div>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-xl font-semibold mb-4">Réseaux Sociaux</h4>
            
            <div className="space-y-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-xs text-white/70">@lejardinsecret.paris</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Facebook className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-medium">Facebook</p>
                  <p className="text-xs text-white/70">Le Jardin Secret</p>
                </div>
              </motion.a>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-4 border border-primary/30">
              <p className="text-sm font-medium mb-2">Newsletter</p>
              <p className="text-xs text-white/70 mb-3">
                Recevez nos offres exclusives
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent"
                />
                <button className="px-3 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-white/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Le Jardin Secret. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Mentions légales
              </a>
              <span className="text-white/40">•</span>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                Politique de confidentialité
              </a>
              <span className="text-white/40">•</span>
              <a href="#" className="text-white/60 hover:text-accent transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/50">
            <span>Site créé avec</span>
            <Heart className="w-3 h-3 text-accent fill-current" />
            <span>et</span>
            <span className="text-accent">�️</span>
            <span>à Paris</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
