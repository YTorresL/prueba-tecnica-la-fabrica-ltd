'use client'
import { Button } from '@/components/ui/button'
import { Typography, TYPO_STYLES } from '@/components/common/typography'
import { IconArrow } from '@/assets/icons/arrow'

export function Hero() {
  const handleClick = () => {
    const qrElement = document.getElementById('qr')
    if (qrElement) {
      qrElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="custom-width space-y-10 px-4 md:px-6 py-10 text-center"
    >
      <div className="space-y-5 w-2/3 mx-auto">
        <Typography tag={'h1'} variant={TYPO_STYLES.VARIANT.TITLE}>
          Powerful Yet Simple QR Code Generator
        </Typography>
        <Typography variant={TYPO_STYLES.VARIANT.BODY}>
          Easily create, track, and manage your QR codes.
        </Typography>
      </div>
      <Button className="px-10 min-w-24 h-12 space-x-2" onClick={handleClick}>
        <Typography
          variant={TYPO_STYLES.VARIANT.BODY}
          className={'font-normal'}
        >
          Create QR Code
        </Typography>

        <IconArrow className="w-5 h-5 " />
      </Button>
      <div>
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-auto object-contain mx-auto"
          width="2869"
          height="1512"
        />
      </div>
    </section>
  )
}
