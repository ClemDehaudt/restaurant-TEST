'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Calendar, Clock, Users, Phone, Mail, X, Check, AlertCircle } from 'lucide-react'

interface Reservation {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  specialRequests?: string
  createdAt: string
}

export default function Reservation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [showForm, setShowForm] = useState(false)
  const [showReservations, setShowReservations] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  // Charger les réservations depuis localStorage au montage
  useEffect(() => {
    const savedReservations = localStorage.getItem('restaurant-reservations')
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations))
    }
  }, [])

  // Sauvegarder les réservations dans localStorage à chaque modification
  useEffect(() => {
    if (reservations.length > 0) {
      localStorage.setItem('restaurant-reservations', JSON.stringify(reservations))
    }
  }, [reservations])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setMessage('Veuillez remplir tous les champs obligatoires')
      setMessageType('error')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    // Vérifier si le créneau est déjà pris
    const isSlotTaken = reservations.some(
      res => res.date === formData.date && res.time === formData.time
    )

    if (isSlotTaken) {
      setMessage('Ce créneau horaire est déjà réservé. Veuillez choisir un autre horaire.')
      setMessageType('error')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    // Créer la nouvelle réservation
    const newReservation: Reservation = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    }

    // Ajouter la réservation
    setReservations([...reservations, newReservation])
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      specialRequests: ''
    })
    
    setShowForm(false)
    setMessage('Réservation confirmée avec succès !')
    setMessageType('success')
    setTimeout(() => setMessage(''), 3000)
  }

  const handleDelete = (id: string) => {
    setReservations(reservations.filter(res => res.id !== id))
    setMessage('Réservation annulée')
    setMessageType('success')
    setTimeout(() => setMessage(''), 3000)
  }

  const getAvailableTimes = () => {
    const times = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00']
    const bookedTimes = reservations
      .filter(res => res.date === formData.date)
      .map(res => res.time)
    return times.filter(time => !bookedTimes.includes(time))
  }

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
            Réservation
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Réservez votre table en quelques clics et consultez les disponibilités en temps réel
          </p>
        </motion.div>

        {/* Message de confirmation/erreur */}
        {message && (
          <motion.div 
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              messageType === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {messageType === 'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{message}</span>
          </motion.div>
        )}

        {/* Boutons d'action */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button 
            className="btn-primary bg-accent hover:bg-accent/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Fermer le formulaire' : 'Faire une réservation'}
          </motion.button>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReservations(!showReservations)}
          >
            {showReservations ? 'Masquer les réservations' : `Voir les réservations (${reservations.length})`}
          </motion.button>
        </motion.div>

        {/* Formulaire de réservation */}
        {showForm && (
          <motion.div 
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="jean@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Nombre de personnes *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Heure *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={!formData.date}
                  >
                    <option value="">Sélectionnez une heure</option>
                    {getAvailableTimes().map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Demandes spéciales
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Allergies, célébrations spéciales, etc."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary bg-accent hover:bg-accent/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirmer la réservation
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Liste des réservations */}
        {showReservations && (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
              Réservations existantes ({reservations.length})
            </h3>
            
            {reservations.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Aucune réservation pour le moment</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {reservations
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map((reservation) => (
                    <motion.div
                      key={reservation.id}
                      className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-lg text-primary mb-2">
                                {reservation.name}
                              </h4>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  {reservation.email}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  {reservation.phone}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 justify-end text-sm">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(reservation.date).toLocaleDateString('fr-FR')}
                                </div>
                                <div className="flex items-center gap-2 justify-end text-sm">
                                  <Clock className="w-4 h-4" />
                                  {reservation.time}
                                </div>
                                <div className="flex items-center gap-2 justify-end text-sm">
                                  <Users className="w-4 h-4" />
                                  {reservation.guests} {reservation.guests === 1 ? 'personne' : 'personnes'}
                                </div>
                              </div>
                            </div>
                          </div>
                          {reservation.specialRequests && (
                            <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-600">
                              <strong>Demandes spéciales :</strong> {reservation.specialRequests}
                            </div>
                          )}
                        </div>
                        <motion.button
                          onClick={() => handleDelete(reservation.id)}
                          className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Annuler la réservation"
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
