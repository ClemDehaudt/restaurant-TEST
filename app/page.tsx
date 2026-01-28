import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reservation from '@/components/Reservation'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Gallery />
      <Footer />
    </main>
  )
}
