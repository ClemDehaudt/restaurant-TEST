'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Star, ChefHat, Leaf, Flame } from 'lucide-react'
import { menuData, categories, type MenuItem, type Category } from '@/lib/menuData'

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('antipasti')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = menuData.filter(item => {
    const matchesCategory = item.category === selectedCategory
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameItalian.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'signature': return <ChefHat className="w-3 h-3" />
      case 'bestseller': return <Star className="w-3 h-3" />
      case 'spicy': return <Flame className="w-3 h-3" />
      case 'vegetarian': return <Leaf className="w-3 h-3" />
      default: return null
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'signature': return 'bg-accent text-white'
      case 'bestseller': return 'bg-primary text-white'
      case 'spicy': return 'bg-red-500 text-white'
      case 'vegetarian': return 'bg-secondary text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <section id="menu" className="py-24 bg-cream">
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
            Notre <span className="text-primary">Carte</span>
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez nos plats traditionnels italiens, préparés avec des produits authentiques 
            importés directement d'Italie et une passion transmise de génération en génération.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un plat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border-light bg-white text-text-dark placeholder-text-gray focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                  : 'bg-white text-text-gray hover:bg-primary/10 border border-border-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.03,
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Badges */}
                  {item.badges && item.badges.length > 0 && (
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                      {item.badges.map((badge) => (
                        <div
                          key={badge}
                          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(badge)}`}
                        >
                          {getBadgeIcon(badge)}
                          <span>
                            {badge === 'signature' && 'Signature'}
                            {badge === 'bestseller' && 'Best-seller'}
                            {badge === 'spicy' && 'Épicé'}
                            {badge === 'vegetarian' && 'Végétarien'}
                            {badge === 'specialty' && 'Spécialité'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Placeholder Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">
                        {item.category === 'antipasti' && '🥗'}
                        {item.category === 'pizze' && '🍕'}
                        {item.category === 'paste' && '🍝'}
                        {item.category === 'secondi' && '🥩'}
                        {item.category === 'dolci' && '🍰'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-text-dark mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-primary italic font-medium">
                        {item.nameItalian}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-serif text-2xl font-bold text-secondary">
                        {item.price}€
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-text-gray leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Hover Reveal */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-border-light opacity-0"
                  >
                    <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300">
                      Commander ce plat
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-text-gray text-lg">
              Aucun plat trouvé pour "{searchTerm}"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
