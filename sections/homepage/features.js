'use client'
import { TYPO_STYLES, Typography } from '@/components/common/typography'
import { IconArrow } from '@/assets/icons/arrow'
import { Button } from '@/components/ui/button'
import { features } from '@/data/features'

export function Features() {
  const handleClick = () => {
    const qrElement = document.getElementById('qr')
    if (qrElement) {
      qrElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="bg-white">
      <div className="custom-width !max-w-screen-lg space-y-10 md:space-y-16 px-4 md:px-6 py-20">
        <div className="space-y-5">
          <Typography tag={'h2'} variant={TYPO_STYLES.VARIANT.SUBTITLE}>
            Your QR Code in 3 Steps
          </Typography>
          <Typography
            variant={TYPO_STYLES.VARIANT.CAPTION}
            className="!font-normal"
          >
            Creating your QR codes is extremely simple.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              className="space-y-5 md:space-y-10 text-center w-full"
              key={index}
            >
              <div className="w-fit mx-auto">{feature.icon}</div>
              <div className="space-y-2 md:space-y-5">
                <Typography tag={'h3'} variant={TYPO_STYLES.VARIANT.CAPTION}>
                  {feature.title}
                </Typography>
                <Typography
                  variant={TYPO_STYLES.VARIANT.CAPTION}
                  className="!font-normal"
                >
                  {feature.description}
                </Typography>
              </div>
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
    </div>
  )
}
