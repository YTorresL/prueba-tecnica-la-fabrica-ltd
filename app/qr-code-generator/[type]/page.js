'use client'
import { Footer } from '@/components/qr/footer'
import { Header } from '@/components/qr/header'
import { useForm } from '@/hooks/useForm'
import { Content } from '@/sections/qr/content'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const { type } = useParams()
  const { handleChange } = useForm()

  useEffect(() => {
    handleChange({
      target: {
        name: 'type',
        value: type
      }
    })
  }, [type])

  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <h1 className="text-3xl font-bold mt-10">QR Generator</h1>
        <Content type={type} />
      </section>
      <Footer />
    </>
  )
}
