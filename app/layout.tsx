import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Le Jardin Secret - Restaurant Français Authentique',
  description: 'Cuisine française authentique au cœur de Paris. Découvrez nos plats signatures dans une ambiance élégante et raffinée.',
  keywords: 'restaurant français, Paris, cuisine authentique, gastronomie',
  openGraph: {
    title: 'Le Jardin Secret - Restaurant Français Authentique',
    description: 'Cuisine française authentique au cœur de Paris',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
