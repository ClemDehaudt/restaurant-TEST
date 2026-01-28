'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Reservation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reservation" className="section-padding bg-cream">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Réserver votre table
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Réservez votre table en quelques clics et rejoignez-nous pour une expérience gastronomique inoubliable
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-primary/20 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Informations de réservation */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">2-20</div>
              <div className="text-sm text-charcoal">Personnes par table</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">7j/7</div>
              <div className="text-sm text-charcoal">Réservation en ligne</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-charcoal">Confirmation instantanée</div>
            </div>
          </motion.div>

          {/* Zone d'intégration Calendly */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-8 min-h-[700px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Widget de réservation
              </h3>
              <p className="text-charcoal mb-6">
                Le widget Calendly sera intégré ici
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-primary/30">
                <code className="text-sm text-primary">
                  {/* Insérer widget Calendly ici */}
                </code>
                <p className="text-xs text-gray-500 mt-2">
                  Instructions dans le README.md
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informations supplémentaires */}
          <motion.div 
            className="mt-8 pt-8 border-t border-primary/20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Pour les groupes</h4>
                <p className="text-sm text-charcoal">
                  Pour les groupes de plus de 8 personnes, veuillez nous contacter directement 
                  par téléphone pour organiser votre événement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Politique d'annulation</h4>
                <p className="text-sm text-charcoal">
                  Annulation gratuite jusqu'à 24h avant votre réservation. 
                  Au-delà, un frais de 50% par personne sera appliqué.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
