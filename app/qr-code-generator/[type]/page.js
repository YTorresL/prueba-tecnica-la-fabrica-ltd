'use client'
import { Footer } from '@/components/layout/qr/footer'
import { Header } from '@/components/layout/qr/header'
import { Content } from '@/sections/qr/content'
import { useParams } from 'next/navigation'
import { TYPO_STYLES, Typography } from '@/components/common/typography'

export default function Page() {
  const { type } = useParams()

  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <Typography
          variant={TYPO_STYLES.VARIANT.QR_TITLE}
          className="md:h-11 h-fit mt-2"
        >
          2. Add content to your QR code
        </Typography>
        <div className="mt-5">
          <Content type={type} />
        </div>
      </section>
      <Footer />
    </>
  )
}
