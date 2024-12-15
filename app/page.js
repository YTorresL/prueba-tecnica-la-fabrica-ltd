import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Hero } from '@/sections/homepage/hero'
import { Qr } from '@/sections/homepage/qr'
import { SelectType } from '@/sections/qr/select'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="qr">
          <Qr />
          <SelectType />
        </section>
      </main>
      <Footer />
    </>
  )
}
