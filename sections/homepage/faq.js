'use client'
import { TYPO_STYLES, Typography } from '@/components/common/typography'
import { faq } from '@/data/faq'
import { Button } from '@/components/ui/button'
import { IconArrow } from '@/assets/icons/arrow'
import Link from 'next/link'

export function Faq() {
  const handleClick = () => {
    const qrElement = document.getElementById('qr')
    if (qrElement) {
      qrElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div
      className="custom-width space-y-10 md:space-y-20 px-4 md:px-6 pt-10 pb-20"
      data-aos="fade-up"
    >
      <div className="space-y-5">
        <Typography variant={TYPO_STYLES.VARIANT.SUBTITLE}>
          Frequently Asked Questions
        </Typography>
        <Typography
          variant={TYPO_STYLES.VARIANT.CAPTION}
          className="!font-normal"
        >
          If you have another question reach out at{' '}
          <Link href="mailto:hello@qrcode-koala.com" className="text-blue-500">
            hello@qrcode-koala.com
          </Link>
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {faq.map((item, index) => (
          <div className="space-y-2 w-full" key={index}>
            <h4 className="font-extrabold text-base md:text-lg">
              {item.question}
            </h4>
            <p className="text-justify text-base md:text-lg">{item.answer}</p>
          </div>
        ))}
      </div>
      <div className="w-fit mx-auto">
        <Button
          type="button"
          className="px-10 min-w-24 h-12 space-x-2"
          onClick={handleClick}
        >
          <Typography
            variant={TYPO_STYLES.VARIANT.BODY}
            className={'font-normal'}
          >
            Create QR Code
          </Typography>
          <IconArrow className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
