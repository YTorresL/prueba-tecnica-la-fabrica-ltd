'use client'
import { Header } from '@/components/qr/header'
import { SelectType } from '@/sections/qr/select'

export default function Page() {
  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <h1 className="text-3xl font-bold mt-10">QR Generator</h1>
        <SelectType />
      </section>
    </>
  )
}