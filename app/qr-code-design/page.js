'use client'
import { Footer } from '@/components/layout/qr/footer'
import { Header } from '@/components/layout/qr/header'
import { Design } from '@/sections/qr/design'
import { Typography, TYPO_STYLES } from '@/components/common/typography'
import { useForm } from '@/hooks/useForm'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { form } = useForm()

  const router = useRouter()

  useEffect(() => {
    if (!form.type || !form.file) {
      router.push('/qr-code-generator')
    }
  }, [])

  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <Typography
          variant={TYPO_STYLES.VARIANT.QR_TITLE}
          className="md:h-11 h-fit mt-2"
        >
          3. Customize Your QR Code
        </Typography>
        <div className="mt-3">
          <Design />
        </div>
      </section>
      <Footer />
    </>
  )
}
