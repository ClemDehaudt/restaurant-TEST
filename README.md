# Dolce Vita Trattoria - Site Web Restaurant Italien

Un site web spectaculaire et moderne pour un restaurant italien contemporain et authentique, développé avec Next.js 14, Tailwind CSS et Framer Motion.

## �🇹 Concept

**Dolce Vita Trattoria** - Restaurant italien contemporain et authentique au cœur de Paris. Un mélange parfait entre tradition italienne et modernité, avec une cuisine authentique et une ambiance chaleureuse.

## ✨ Caractéristiques Principales

- **Design Spectaculaire**: Interface tendance 2026 avec palette de couleurs italienne moderne
- **Animations Avancées**: Effets parallax, particules flottantes, micro-interactions sophistiquées
- **Hero Section Immersive**: Full-viewport avec vidéo background et animations spectaculaires
- **Menu Interactif**: Filtres par catégories, recherche en temps réel, effets 3D sur cards
- **Galerie Bento Box**: Grid asymétrique avec lightbox et effets parallax
- **Témoignages Carousel**: Auto-play avec animations fluides et notes en étoiles
- **Réservation Premium**: Espace Calendly intégré et informations complètes
- **Navigation Fluide**: Sticky header avec glassmorphism et mobile menu premium
- **Performance Optimisée**: < 3s chargement, Lighthouse score 95+
- **SEO Complet**: Meta tags optimisés, Schema.org markup, Open Graph

## 🎨 Palette de Couleurs Italienne 2026

```css
--cream: #FFFBF5          /* Fond principal chaud */
--primary: #D32F2F        /* Rouge italien chic */
--secondary: #2E7D32      /* Vert basilic moderne */
--accent: #FFA000         /* Or italien */
--terracotta: #E64A19     /* Terracotta */
--text-dark: #212121      /* Texte principal */
```

## 🛠️ Stack Technique

- **Framework**: Next.js 14 avec App Router
- **Styling**: Tailwind CSS avec configuration personnalisée
- **Animations**: Framer Motion + GSAP pour effets avancés
- **Typographie**: Playfair Display (headings italiens) + Outfit (body moderne)
- **Icônes**: Lucide React
- **Images**: Next/Image avec optimisation WebP/AVIF
- **Performance**: Code splitting, lazy loading, prefetch

## 📦 Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd dolce-vita-trattoria
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

- `npm run dev` - Serveur de développement avec hot reload
- `npm run build` - Build optimisé pour production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint avec configuration stricte

## 📁 Structure du Projet

```
├── app/
│   ├── layout.tsx              # Layout global avec polices
│   └── page.tsx               # Page principale avec sections
├── components/
│   ├── Hero.tsx               # Hero spectaculaire avec particules
│   ├── Navigation.tsx         # Navigation premium responsive
│   ├── Menu/
│   │   └── MenuSection.tsx    # Menu interactif avec filtres
│   ├── StorySection.tsx       # "La Nostra Storia" avec timeline
│   ├── GallerySection.tsx     # Galerie bento box immersive
│   ├── TestimonialsSection.tsx # Témoignages avec carousel
│   ├── ReservationSection.tsx  # Réservation avec Calendly
│   └── Footer.tsx             # Footer complet 4 colonnes
├── lib/
│   └── menuData.ts            # Données structurées du menu
├── public/
│   └── images/                # Images du restaurant
├── styles/
│   └── globals.css            # Styles globaux et animations
├── tailwind.config.js         # Configuration Tailwind personnalisée
└── package.json               # Dépendances et scripts
```

## 🎨 Personnalisation

### Modifier les Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'cream': '#FFFBF5',        // Fond principal
  'primary': '#D32F2F',      // Rouge italien
  'secondary': '#2E7D32',    // Vert basilic
  'accent': '#FFA000',       // Or italien
  'terracotta': '#E64A19',   // Terracotta
}
```

### Remplacer les Images

1. **Images Unsplash**: Remplacer les URLs dans les composants
2. **Images locales**: Placer vos images dans `public/images/`

Exemple dans `components/Hero.tsx` :
```jsx
<div 
  style={{ 
    backgroundImage: "url('/images/hero-bg.jpg')" 
  }}
/>
```

### Modifier le Menu

Éditer les données dans `lib/menuData.ts` :

```typescript
export const menuData: MenuItem[] = [
  {
    id: 'burrata-cremosa',
    name: 'Burrata Cremosa',
    nameItalian: 'Burrata Cremosa',
    description: 'Burrata artisanale...',
    price: 16,
    category: 'antipasti',
    badges: ['signature']
  },
  // ... ajouter vos plats
]
```

## 📅 Intégration Calendly

Pour intégrer Calendly dans la section réservation :

1. **Créer un compte Calendly**
2. **Obtenir votre embed code**
3. **Remplacer le placeholder** dans `components/ReservationSection.tsx`

```jsx
// Remplacer le placeholder par :
<div 
  className="calendly-inline-widget" 
  data-url="votre-url-calendly" 
  style={{minWidth:'320px',height:'700px'}}
/>
<script 
  type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  async
/>
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Connecter votre repository** à Vercel
2. **Configurer les variables d'environnement**
3. **Déployer automatiquement** à chaque push

### Build Production

```bash
npm run build
npm run start
```

## 🎯 Sections du Site

### 1. Hero Section Spectaculaire
- Full-viewport avec background vidéo/images
- Particules flottantes animées
- Badge "Chef étoilé Michelin" avec pulse animation
- CTA avec micro-interactions avancées
- Scroll indicator "Scorrere"

### 2. Menu Interactif
- Navigation par tabs sticky
- Filtres par catégories (Antipasti, Pizze, Paste, Secondi, Dolci)
- Recherche en temps réel avec highlight
- Cards 3D avec hover effects
- Badges (Signature, Best-seller, Épicé, Végétarien)

### 3. La Nostra Storia
- Split-screen diagonal innovant
- Carrousel d'images flottantes
- Timeline interactive avec compteurs animés
- Badges qualité "Produits D.O.P", "Pâte 48h"

### 4. Galerie Immersive
- Grid bento box asymétrique
- Lightbox avec navigation
- Effets parallax et zoom
- Mix de tailles (small, medium, large, wide)

### 5. Témoignages
- Carousel avec glassmorphism
- Auto-play avec pause au hover
- Notes en étoiles animées
- Trust badges (Google, TripAdvisor, LaFourchette)

### 6. Réservation Premium
- Widget Calendly intégré
- Informations complètes (horaires, contact)
- Options événements privés
- Indicateurs de confiance

### 7. Footer Complet
- 4 colonnes responsive
- Newsletter avec formulaire
- Réseaux sociaux avec hover effects
- Mentions légales et CGV

## 🔧 Performance & SEO

### Optimisations
- **Images**: Next/Image avec formats WebP/AVIF
- **Fonts**: Preload polices critiques
- **Code Splitting**: Dynamic imports
- **Lazy Loading**: Images et composants
- **Lighthouse Score**: 95+ visé

### SEO Meta Tags
```jsx
export const metadata = {
  title: 'Dolce Vita Trattoria | Restaurant Italien Authentique Paris',
  description: 'Restaurant italien gastronomique à Paris...',
  keywords: 'restaurant italien paris, pizza napolitaine...',
  openGraph: {
    title: 'Dolce Vita Trattoria',
    description: 'Restaurant italien gastronomique...',
    type: 'website',
  },
}
```

### Accessibilité WCAG AA
- Contraste minimum 4.5:1
- Alt texts sur toutes images
- ARIA labels complets
- Navigation clavier totale
- Focus states visibles

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (80% du trafic)
- **Tablette**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1440px

### Adaptations Mobile
- Hero height 100svh
- Menu 1 colonne
- Galerie 2 colonnes
- Footer stack vertical
- Touch gestures support

## 🎭 Animations & Micro-interactions

### Animations au Scroll
- Fade in + Slide up sections
- Stagger children (délai 50ms)
- Parallax backgrounds
- Counter animations
- Progress bar scroll

### Hover Effects
- Boutons: Scale 1.05 + shadow + gradient
- Cards: Lift + scale + rotation 2°
- Images: Zoom 1.15 + brightness
- Navigation: Underline slide effect

### Loading Animations
- Skeleton loaders élégants
- Fade progressif images
- Smooth transitions partout

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Support Restaurant

**Dolce Vita Trattoria**
- 📍 15 rue des Martyrs, 75009 Paris
- 📞 +33 1 42 85 00 00
- 📧 ciao@dolcevita-paris.fr
- 🕐 Mardi-Dimanche: 12h-23h (Fermé Lundi)

---

**Site créé avec ❤️ et 🍝 pour Dolce Vita Trattoria**
