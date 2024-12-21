import { TYPO_STYLES, Typography } from '@/components/common/typography'
import { SelectType } from '../qr/select'

export function Qr() {
  return (
    <section id="qr" className="custom-width space-y-10 px-4 md:px-6 py-10">
      <div className="text-center space-y-5">
        <Typography tag={'h2'} variant={TYPO_STYLES.VARIANT.SUBTITLE}>
          QR Codes For Everything
        </Typography>
        <Typography
          variant={TYPO_STYLES.VARIANT.CAPTION}
          className="!font-normal"
        >
          Easily create, track, and manage your QR codes.
        </Typography>
      </div>
      <SelectType />
    </section>
  )
}
