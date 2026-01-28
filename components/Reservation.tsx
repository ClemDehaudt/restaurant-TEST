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
  const [showAdmin, setShowAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
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

  // Mot de passe admin (simple pour démo - en production, utiliser un système plus sécurisé)
  const ADMIN_PASSWORD = 'admin123'

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
    
    // Envoyer l'email de confirmation
    sendConfirmationEmail(newReservation)
    
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
    setMessage('Réservation confirmée avec succès ! Un email de confirmation a été envoyé.')
    setMessageType('success')
    setTimeout(() => setMessage(''), 3000)
  }

  const handleDelete = (id: string) => {
    setReservations(reservations.filter(res => res.id !== id))
    setMessage('Réservation annulée')
    setMessageType('success')
    setTimeout(() => setMessage(''), 3000)
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true)
      setAdminPassword('')
      setMessage('Accès admin autorisé')
      setMessageType('success')
      setTimeout(() => setMessage(''), 2000)
    } else {
      setMessage('Mot de passe incorrect')
      setMessageType('error')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false)
    setShowAdmin(false)
    setMessage('Déconnexion admin')
    setMessageType('success')
    setTimeout(() => setMessage(''), 2000)
  }

  // Fonction pour envoyer un email de confirmation (simulation)
  const sendConfirmationEmail = (reservation: Reservation) => {
    // En production, utiliser un service d'envoi d'emails comme EmailJS, SendGrid, etc.
    console.log('Email de confirmation envoyé à:', reservation.email)
    console.log('Détails de la réservation:', reservation)
    
    // Pour la démo, on simule l'envoi d'email
    const emailContent = `
      Réservation confirmée au restaurant "Le Jardin Secret"
      
      Nom: ${reservation.name}
      Date: ${new Date(reservation.date).toLocaleDateString('fr-FR')}
      Heure: ${reservation.time}
      Nombre de personnes: ${reservation.guests}
      ${reservation.specialRequests ? `Demandes spéciales: ${reservation.specialRequests}` : ''}
      
      Merci pour votre réservation !
    `
    
    // Stocker l'email dans localStorage pour simulation
    const sentEmails = JSON.parse(localStorage.getItem('sent-emails') || '[]')
    sentEmails.push({
      to: reservation.email,
      subject: 'Confirmation de réservation - Le Jardin Secret',
      content: emailContent,
      sentAt: new Date().toISOString()
    })
    localStorage.setItem('sent-emails', JSON.stringify(sentEmails))
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
          
          {/* Bouton admin caché - seulement visible si on connaît le raccourci */}
          <motion.button 
            className="btn-secondary opacity-50 hover:opacity-100 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAdmin(!showAdmin)}
            title="Accès administrateur"
          >
            🍽️ Admin
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

        {/* Section Admin */}
        {showAdmin && (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {!isAdminAuthenticated ? (
              // Formulaire de connexion admin
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-6 text-center">
                  Accès Administrateur
                </h3>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Entrez le mot de passe admin"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full btn-primary bg-accent hover:bg-accent/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Se connecter
                  </motion.button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Mot de passe par défaut : admin123
                </p>
              </div>
            ) : (
              // Interface admin avec les réservations
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-primary">
                    Réservations ({reservations.length})
                  </h3>
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleAdminLogout}
                      className="btn-secondary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Déconnexion
                    </motion.button>
                  </div>
                </div>
                
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
                              <div className="mt-3 text-xs text-gray-400">
                                Réservé le {new Date(reservation.createdAt).toLocaleString('fr-FR')}
                              </div>
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
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
