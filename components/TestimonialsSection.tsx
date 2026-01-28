'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  avatar: string
  source: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie M.',
    location: 'Paris 11ème',
    rating: 5,
    text: 'Les meilleures pâtes carbonara de Paris ! On se croirait directement à Rome. L\'ambiance est chaleureuse, le service impeccable. Un vrai voyage en Italie sans quitter Paris.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    source: 'Google Reviews'
  },
  {
    id: '2',
    name: 'Marc D.',
    location: 'Habitué depuis 2 ans',
    rating: 5,
    text: 'L\'osso buco est une tuerie, et l\'ambiance super chaleureuse. Marco, le chef, est un génie. Je viens ici au moins une fois par semaine et c\'est toujours un plaisir.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    source: 'TripAdvisor'
  },
  {
    id: '3',
    name: 'Alessandro R.',
    location: 'Italien',
    rating: 5,
    text: 'Pizza napolitaine authentique, pâte incroyable. En tant qu\'Italien, je peux vous dire que c\'est la vraie pizza napolitaine comme chez nous. Grazie mille Dolce Vita!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    source: 'Google Reviews'
  },
  {
    id: '4',
    name: 'Claire L.',
    location: 'Paris 9ème',
    rating: 5,
    text: 'Un restaurant magnifique ! Les desserts sont divins, surtout le tiramisu. Le cadre est élégant et parfait pour une soirée romantique. Je recommande vivement !',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    source: 'LaFourchette'
  },
  {
    id: '5',
    name: 'Thomas B.',
    location: 'Food Critic',
    rating: 5,
    text: 'Une cuisine italienne d\'exception. La qualité des produits est remarquable, le travail de la pâte est artisanal. C\'est sans aucun doute l\'une des meilleures trattorias de Paris.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    source: 'Google Reviews'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            Ce que disent nos <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de ceux qui ont vécu l'expérience Dolce Vita
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-8 mx-auto"
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>

              {/* Testimonial Content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <p className="text-xl md:text-2xl text-text-dark leading-relaxed font-medium italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </motion.blockquote>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-1 mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Star className="w-6 h-6 fill-accent text-accent" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-primary/20">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-serif text-lg font-bold text-text-dark">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-text-gray">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonials[currentIndex].source}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-2 mt-8"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary to-secondary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { name: 'Google Reviews', rating: '4.9', reviews: '328' },
            { name: 'TripAdvisor', rating: '5.0', reviews: '256' },
            { name: 'LaFourchette', rating: '4.8', reviews: '189' }
          ].map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-white/50"
            >
              <p className="font-serif text-2xl font-bold text-primary mb-1">
                {platform.rating}
              </p>
              <p className="text-sm text-text-gray mb-2">
                {platform.name}
              </p>
              <p className="text-xs text-text-gray">
                {platform.reviews} avis
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
