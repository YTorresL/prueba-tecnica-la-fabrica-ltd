'use client'
import { TYPO_STYLES, Typography } from '@/components/common/typography'
import { IconArrow } from '@/assets/icons/arrow'
import { Button } from '@/components/ui/button'
import { benefits } from '@/data/benefits'

export function Benefits() {
  const handleClick = () => {
    const qrElement = document.getElementById('qr')
    if (qrElement) {
      qrElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="custom-width space-y-10 md:space-y-20 px-4 md:px-6 py-20">
        <div className="space-y-5">
          <Typography variant={TYPO_STYLES.VARIANT.SUBTITLE}>
            Benefits
          </Typography>
          <Typography
            variant={TYPO_STYLES.VARIANT.CAPTION}
            className="!font-normal"
          >
            Packed with everything you need in a QR Code Generator.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              className="space-y-5 md:space-y-10 text-center w-full"
              key={index}
            >
              <div className="w-fit mx-auto">{benefit.icon}</div>
              <div className="space-y-2 md:space-y-5">
                <Typography tag={'h3'} variant={TYPO_STYLES.VARIANT.CAPTION}>
                  {benefit.title}
                </Typography>
                <Typography
                  variant={TYPO_STYLES.VARIANT.CAPTION}
                  className="!font-normal"
                >
                  {benefit.description}
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
