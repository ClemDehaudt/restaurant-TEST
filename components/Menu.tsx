'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Confit de Canard",
    description: "Cuisse de canard confite lentement, servie avec pommes de terre sarladaises",
    price: "28€",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 2,
    name: "Boeuf Bourguignon",
    description: "Mijoté traditionnel au vin rouge de Bourgogne, carottes et oignons",
    price: "32€",
    image: "https://images.unsplash.com/photo-1602577011051-2ba1cda506dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Soupe à l'Oignon",
    description: "Gratinée au comté et pain de campagne croustillant",
    price: "14€",
    image: "https://images.unsplash.com/photo-1547592166-66acaf2c09c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 4,
    name: "Ratatouille Niçoise",
    description: "Légumes du soleil mijotés, basilic frais et huile d'olive",
    price: "22€",
    image: "https://images.unsplash.com/photo-1541014741259-5b3f192f93b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 5,
    name: "Tarte Tatin",
    description: "Pommes caramélisées, pâte feuilletée, servie avec crème fraîche",
    price: "12€",
    image: "https://images.unsplash.com/photo-1604503438504-a8c20c8c6e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 6,
    name: "Crème Brûlée",
    description: "Vanille de Madagascar, sucre cassant au chalumeau",
    price: "11€",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
]

interface MenuProps {
  showMenu?: boolean
  setShowMenu?: (show: boolean) => void
}

export default function Menu({ showMenu = false, setShowMenu }: MenuProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [internalShowMenu, setInternalShowMenu] = useState(false)
  
  const handleShowMenu = showMenu || internalShowMenu
  const handleSetShowMenu = setShowMenu || setInternalShowMenu

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <section id="menu" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            ref={ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nos Plats Signatures
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Découvrez notre sélection de plats traditionnels français, préparés avec passion et des ingrédients d'exception
            </p>
          </motion.div>

          <motion.div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="card-hover bg-cream rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-accent font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-charcoal text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSetShowMenu(true)}
            >
              Voir le menu complet
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modale Menu Complet */}
      {handleShowMenu && (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => handleSetShowMenu(false)}
      >
        <motion.div 
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-primary/20 p-6 flex justify-between items-center">
            <h2 className="text-3xl font-serif font-bold text-primary">Menu Complet</h2>
            <button 
              onClick={() => handleSetShowMenu(false)}
              className="text-charcoal hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Entrées */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Entrées</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Soupe à l'oignon gratinée</h4>
                    <p className="text-sm text-gray-600">Oignons caramélisés, bouillon de bœuf, gruyère</p>
                  </div>
                  <span className="text-primary font-bold ml-4">14€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Foie gras poêlé</h4>
                    <p className="text-sm text-gray-600">Pain de mie grillé, figues confites</p>
                  </div>
                  <span className="text-primary font-bold ml-4">22€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Saumon fumé maison</h4>
                    <p className="text-sm text-gray-600">Blinis, aneth, crème fraîche</p>
                  </div>
                  <span className="text-primary font-bold ml-4">18€</span>
                </div>
              </div>
            </div>

            {/* Plats Principaux */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Plats Principaux</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Confit de canard</h4>
                    <p className="text-sm text-gray-600">Pommes de terre sarladaises, salade verte</p>
                  </div>
                  <span className="text-primary font-bold ml-4">28€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Boeuf bourguignon</h4>
                    <p className="text-sm text-gray-600">Carottes, oignons, vin rouge de Bourgogne</p>
                  </div>
                  <span className="text-primary font-bold ml-4">32€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Filet de bar</h4>
                    <p className="text-sm text-gray-600">Asperges vertes, sauce hollandaise</p>
                  </div>
                  <span className="text-primary font-bold ml-4">26€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Magret de canard</h4>
                    <p className="text-sm text-gray-600">Purée de céleri, sauce au miel</p>
                  </div>
                  <span className="text-primary font-bold ml-4">30€</span>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Desserts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Tarte Tatin</h4>
                    <p className="text-sm text-gray-600">Pommes caramélisées, crème fraîche</p>
                  </div>
                  <span className="text-primary font-bold ml-4">12€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Crème brûlée</h4>
                    <p className="text-sm text-gray-600">Vanille de Madagascar, sucre cassant</p>
                  </div>
                  <span className="text-primary font-bold ml-4">11€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Mousse au chocolat</h4>
                    <p className="text-sm text-gray-600">Chocolat noir 70%, copeaux de chocolat</p>
                  </div>
                  <span className="text-primary font-bold ml-4">10€</span>
                </div>
              </div>
            </div>

            {/* Vins */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Sélection de Vins</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Bordeaux Rouge</h4>
                    <p className="text-sm text-gray-600">Château Margaux 2018</p>
                  </div>
                  <span className="text-primary font-bold ml-4">85€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Bourgogne Blanc</h4>
                    <p className="text-sm text-gray-600">Meursault Premier Cru 2019</p>
                  </div>
                  <span className="text-primary font-bold ml-4">75€</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal">Champagne</h4>
                    <p className="text-sm text-gray-600">Moët & Chandon Brut</p>
                  </div>
                  <span className="text-primary font-bold ml-4">65€</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
    </>
  )
}
