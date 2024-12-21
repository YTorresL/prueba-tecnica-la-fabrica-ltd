import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Hero } from '@/sections/homepage/hero'
import { Qr } from '@/sections/homepage/qr'
import { Benefits } from '@/sections/homepage/benefits'
import { Features } from '@/sections/homepage/features'
import { Faq } from '@/sections/homepage/faq'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Qr />
        <Benefits />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
