import { QRCodeSVG } from 'qrcode.react'
import { useForm } from '@/hooks/useForm'
import Link from 'next/link'
import { TYPO_STYLES, Typography } from '@/components/common/typography'
import { Check } from '@/assets/icons/check'
import { QrArrow } from '@/assets/icons/qrArrow'

export function Download() {
  const { url } = useForm()

  return (
    <>
      <div className="border text-center border-gray-300 rounded-lg hidden md:flex flex-col justify-center space-y-5 p-12 relative">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div>
              <Check />
            </div>
            <Typography tag="h2" variant={TYPO_STYLES.VARIANT.QR_TITLE}>
              Your QR Code Is Ready
            </Typography>
          </div>
          <Typography tag="h3">Scan it now to see how it works!</Typography>
        </div>
        <div className="hidden xl:block absolute top-24 right-0 rotate-[160deg]">
          <QrArrow />
        </div>
        {url && (
          <Link href={url}>
            <QRCodeSVG
              value={url}
              size={300}
              className="mx-auto cursor-pointer"
            />
          </Link>
        )}

        <Typography className="text-sm">
          You can now scan your QR code with your phone to see it in action
        </Typography>
      </div>
    </>
  )
}
