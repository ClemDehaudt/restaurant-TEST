import '../styles/globals.css'
import { Playfair_Display, Outfit } from 'next/font/google'
import Navigation from '@/components/Navigation'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['600', '700', '800']
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600']
})

export const metadata = {
  title: 'Dolce Vita Trattoria | Restaurant Italien Authentique Paris',
  description: 'Restaurant italien gastronomique à Paris. Pizza napolitaine au feu de bois, pâtes fraîches maison, cuisine authentique. Réservez votre table.',
  keywords: 'restaurant italien paris, pizza napolitaine, pâtes fraîches, trattoria',
  openGraph: {
    title: 'Dolce Vita Trattoria | Restaurant Italien Authentique Paris',
    description: 'Restaurant italien gastronomique à Paris. Pizza napolitaine au feu de bois, pâtes fraîches maison.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-cream text-text-dark">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
