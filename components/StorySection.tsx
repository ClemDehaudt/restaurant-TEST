'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Award, Users, Clock, ChefHat, MapPin } from 'lucide-react'

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: <Heart className="w-6 h-6" />, value: "12", label: "ans d'excellence", suffix: "" },
    { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "clients heureux", suffix: "" },
    { icon: <Award className="w-6 h-6" />, value: "100%", label: "fait maison", suffix: "" },
    { icon: <MapPin className="w-6 h-6" />, value: "100%", label: "produits italiens", suffix: "" }
  ]

  return (
    <section id="story" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
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
            La <span className="text-primary">Nostra</span> Storia
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Une histoire de passion, de tradition et d'amour de la cuisine italienne
          </p>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div className="absolute inset-0 bg-cover bg-center"
                   style={{ 
                     backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
                   }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <div className="w-full h-full bg-cover bg-center"
                     style={{ 
                       backgroundImage: "url('https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')" 
                     }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <div className="w-full h-full bg-cover bg-center"
                     style={{ 
                       backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')" 
                     }} />
              </motion.div>

              {/* Chef Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <ChefHat className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-serif font-bold text-text-dark">Chef Marco Rossi</p>
                    <p className="text-sm text-text-gray">3 générations de passion</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Story Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl font-bold text-text-dark"
              >
                Une Tradition Familiale
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-text-gray leading-relaxed text-lg"
              >
                Née d'une passion transmise de génération en génération, la Dolce Vita Trattoria 
                est bien plus qu'un restaurant : c'est une célébration de l'âme italienne. 
                Notre histoire commence il y a plus de 50 ans dans les ruelles de Naples, 
                où la grand-mère Marco préparait ses premières pâtes fraîches.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-text-gray leading-relaxed text-lg"
              >
                Formé auprès des plus grands chefs de Naples et Florence, notre chef 
                Marco Rossi a su marier les techniques traditionnelles avec une touche 
                de modernité. Chaque plat raconte une histoire, chaque saveur évoque 
                des souvenirs d'enfance et de partage familial.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-text-gray leading-relaxed text-lg"
              >
                Notre engagement : vous offrir une expérience authentique avec des 
                produits D.O.P importés directement d'Italie, une pâte fermentée 48h 
                pour nos pizzas, et des pâtes fraîches faites maison chaque jour. 
                Bienvenue chez nous, où chaque repas est un voyage en Italie.
              </motion.p>
            </div>

            {/* Quality Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Produits D.O.P",
                "Pâte 48h fermentation", 
                "Feu de bois",
                "Fait maison"
              ].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary"
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                  {stat.icon}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1, duration: 1 }}
                className="font-serif text-3xl font-bold text-text-dark mb-2"
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-text-gray font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
