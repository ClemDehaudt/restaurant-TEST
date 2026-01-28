# Le Jardin Secret - Site Web Restaurant

Un site web élégant et moderne pour un restaurant français authentique, développé avec Next.js 14, Tailwind CSS et Framer Motion.

## 🎯 Caractéristiques

- **Design Élégant**: Interface moderne et raffinée avec palette de couleurs sur mesure
- **Animations Fluides**: Animations Framer Motion avec effets parallax et transitions
- **Responsive Design**: Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance Optimisée**: Code splitting, lazy loading des images
- **SEO Friendly**: Meta tags optimisés, balises sémantiques HTML5
- **Accessibilité**: Conforme WCAG AA minimum

## 🛠️ Stack Technique

- **Framework**: Next.js 14 avec App Router
- **Styling**: Tailwind CSS avec configuration personnalisée
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Images**: Unsplash API (placeholders)
- **Typographie**: Playfair Display (serif) + Inter (sans-serif)

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd jardin-secret-restaurant
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir votre navigateur**
```
http://localhost:3000
```

## 🚀 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build pour production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 📁 Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout global
│   └── page.tsx           # Page principale
├── components/
│   ├── Hero.tsx           # Section hero avec animations
│   ├── About.tsx          # Section à propos
│   ├── Menu.tsx           # Section menu avec cards
│   ├── Reservation.tsx    # Section réservation
│   ├── Gallery.tsx        # Section galerie photos
│   ├── Footer.tsx         # Footer avec informations
│   └── Navigation.tsx     # Navigation responsive
├── public/
│   └── images/            # Images du restaurant
├── styles/
│   └── globals.css        # Styles globaux et Tailwind
├── tailwind.config.js    # Configuration Tailwind
├── next.config.js         # Configuration Next.js
└── package.json           # Dépendances du projet
```

## 🎨 Personnalisation

### Modifier les Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  primary: '#2C5F2D',      // Vert foncé élégant
  accent: '#D4AF37',       // Or discret
  'cream': '#FAF8F3',      // Crème chaud
  charcoal: '#2D2D2D',     // Texte principal
}
```

### Remplacer les Images

1. **Images Unsplash**: Remplacer les URLs dans les composants
2. **Images locales**: Placer vos images dans `public/images/` et mettre à jour les chemins

Exemple dans `components/Hero.tsx` :
```jsx
<img 
  src="/images/hero-bg.jpg"  // Remplacez l'URL Unsplash
  alt="Notre restaurant"
/>
```

### Modifier le Contenu

- **Textes**: Modifier directement dans les composants correspondants
- **Menu**: Éditer le tableau `menuItems` dans `components/Menu.tsx`
- **Informations**: Mettre à jour les coordonnées dans `components/Footer.tsx`

## 📅 Intégration Calendly

Pour intégrer Calendly dans la section réservation :

1. **Créer un compte Calendly** si vous n'en avez pas
2. **Obtenir votre embed code** depuis Calendly
3. **Remplacer le placeholder** dans `components/Reservation.tsx`

```jsx
// Remplacer cette section :
<div className="bg-white rounded-lg p-6 border-2 border-dashed border-primary/30">
  <code className="text-sm text-primary">
    {/* Insérer widget Calendly ici */}
  </code>
</div>

// Par votre embed Calendly :
<div className="calendly-inline-widget" data-url="votre-url-calendly" style={{minWidth:'320px',height:'700px'}}></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

4. **Ajouter le script** dans `app/layout.tsx` si nécessaire

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Connecter votre repository** à Vercel
2. **Configurer les variables d'environnement** si nécessaire
3. **Déployer automatiquement** à chaque push

### Autres Plateformes

```bash
# Build pour production
npm run build

# Démarrer le serveur de production
npm run start
```

## 🔧 Configuration Avancée

### Meta Tags et SEO

Les meta tags sont configurés dans `app/layout.tsx` :

```jsx
export const metadata = {
  title: 'Le Jardin Secret - Restaurant Français Authentique',
  description: 'Cuisine française authentique au cœur de Paris...',
  openGraph: {
    title: 'Le Jardin Secret',
    description: 'Cuisine française authentique...',
    type: 'website',
  },
}
```

### Performance

- **Lazy loading**: Images configurées dans `next.config.js`
- **Code splitting**: Automatique avec Next.js
- **Optimization**: Build optimisé pour production

### Accessibilité

- **Contraste**: Couleurs testées WCAG AA
- **Navigation**: Support clavier complet
- **ARIA labels**: Sur tous les éléments interactifs
- **Focus states**: Visibles et cohérents

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablette**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Sections du Site

1. **Hero**: Full-screen avec overlay et CTA
2. **À Propos**: Layout 2 colonnes avec histoire
3. **Menu**: Grille de plats avec animations
4. **Réservation**: Zone Calendly intégrée
5. **Galerie**: Grille photos avec hover effects
6. **Footer**: Informations complètes et réseaux sociaux

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## 📞 Support

Pour toute question ou assistance technique :

- **Email**: contact@jardinsecret.fr
- **Téléphone**: 01 42 00 00 00

---

**Développé avec ❤️ pour Le Jardin Secret**
