import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Hero } from '@/sections/homepage/hero'
import { Qr } from '@/sections/homepage/qr'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Qr />
      </main>
      <Footer />
    </>
  )
}
