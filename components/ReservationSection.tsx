'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, MapPin, Star } from 'lucide-react'

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-24 bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D32F2F 0, #D32F2F 1px, transparent 1px, transparent 15px),
                           repeating-linear-gradient(-45deg, #2E7D32 0, #2E7D32 1px, transparent 1px, transparent 15px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            Prenota il Tuo <span className="text-primary">Tavolo</span>
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Réservez votre table pour une expérience italienne inoubliable au cœur de Paris
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Reservation Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-6">
                Contact & Réservations
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark">Téléphone</p>
                    <p className="text-primary font-bold">+33 1 42 85 00 00</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark">Email</p>
                    <p className="text-secondary font-bold">ciao@dolcevita-paris.fr</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-text-dark">Adresse</p>
                    <p className="text-accent font-bold">15 rue des Martyrs, 75009 Paris</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50"
            >
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-6">
                Horaires d'Ouverture
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="font-medium text-text-gray">Lundi</span>
                  <span className="text-primary font-bold">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="font-medium text-text-dark">Mardi - Dimanche</span>
                  <div className="text-right">
                    <p className="text-secondary font-bold">12h - 14h30</p>
                    <p className="text-secondary font-bold">19h - 23h</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-current" />
                  <p className="text-sm font-medium text-text-dark">
                    Terrasse chauffée disponible toute l'année
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Special Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20"
            >
              <h3 className="font-serif text-xl font-bold text-text-dark mb-4">
                Événements Privés
              </h3>
              <p className="text-text-gray mb-4">
                Salles privées disponibles pour vos événements professionnels et familiaux.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">8-20 personnes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Sur réservation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Widget Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Réservez en Ligne
                </h3>
                <p className="opacity-90">
                  Choisissez votre date et votre créneau horaire
                </p>
              </div>

              {/* Calendly Widget Placeholder */}
              <div className="p-6">
                <div className="bg-gray-50 rounded-xl h-[600px] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-serif text-xl font-bold text-text-dark mb-2">
                      Calendly Widget
                    </h4>
                    <p className="text-text-gray mb-4">
                      Intégrez votre widget Calendly ici
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-text-gray mb-2">
                        <strong>Configuration requise :</strong>
                      </p>
                      <ul className="text-xs text-text-gray text-left space-y-1">
                        <li>• Créer un compte Calendly</li>
                        <li>• Configurer les types de rendez-vous</li>
                        <li>• Intégrer le code iframe</li>
                        <li>• Personnaliser les couleurs</li>
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-medium"
                    >
                      Contacter par téléphone
                    </motion.button>
                  </div>
                </div>

                {/* Alternative Booking Options */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors duration-300 border border-secondary/20"
                  >
                    <Phone className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-dark">Appeler</p>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors duration-300 border border-primary/20"
                  >
                    <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-dark">Email</p>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/50">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-text-dark ml-3">
              <span className="text-primary font-bold">+500 clients</span> satisfaits ce mois-ci
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
