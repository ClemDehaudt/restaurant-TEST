'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Reservation from '@/components/Reservation'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Hero onOpenMenu={() => setShowMenu(true)} />
      <About />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Reservation />
      <Gallery />
      <Footer />
    </>
  )
}
