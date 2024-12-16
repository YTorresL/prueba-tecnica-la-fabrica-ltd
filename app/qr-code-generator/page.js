'use client'
import { Header } from '@/components/layout/qr/header'
import { SelectType } from '@/sections/qr/select'
import { TYPO_STYLES, Typography } from '@/components/common/typography'

export default function Page() {
  return (
    <>
      <Header />
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <Typography
          variant={TYPO_STYLES.VARIANT.QR_TITLE}
          className="md:h-11 h-fit mt-2"
        >
          1. Select a type of QR Code
        </Typography>
        <div className="mt-3">
          <SelectType />
        </div>
      </section>
    </>
  )
}
