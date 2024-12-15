'use client'
import { Footer } from '@/components/qr/footer'
import { Header } from '@/components/qr/header'
import { Design } from '@/sections/qr/design'

export default function Page() {
  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <Design />
      </section>
      <Footer />
    </>
  )
}
