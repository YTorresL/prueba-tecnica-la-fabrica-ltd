'use client'
import { Download } from '@/sections/qr/download'
import Link from 'next/link'
import { TYPO_STYLES, Typography } from '@/components/common/typography'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="custom-width space-y-5 md:space-y-7 w-full relative p-4 md:p-6">
        <header className="flex items-center">
          <Link className="w-10" href="/qr-code-generator">
            <Image
              alt="QR KOALA Logo"
              src="/qr_koala_logo.webp"
              width={28}
              height={28}
            />
          </Link>
          <Typography
            variant={TYPO_STYLES.VARIANT.CAPTION}
            className="flex-shrink-0"
          >
            QR KOALA
          </Typography>
        </header>
        <section className="flex justify-center items-center">
          <Download />
        </section>
      </div>
    </>
  )
}
