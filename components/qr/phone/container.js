'use client'
import { useForm } from '@/hooks/useForm'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { View } from './view'
import { usePathname } from 'next/navigation'
import { Typography, TYPO_STYLES } from '@/components/common/typography'
import Image from 'next/image'

export function Phone() {
  const { form, url } = useForm()
  const [preview, setPreview] = useState(true)
  const [qr, setQr] = useState(false)

  const pathname = usePathname()

  const isType = form.type.length === 0 ? true : false

  const handlePreview = () => {
    setPreview(true)
    setQr(false)
  }

  const handleQr = () => {
    setQr(true)
    setPreview(false)
  }

  useEffect(() => {
    if (pathname === '/qr-code-design') {
      handleQr()
    }
  }, [pathname])

  return (
    <div
      className={`w-2/6 hidden md:block sticky h-[600px] ${
        (pathname === '/' || pathname === '/qr-code-generator') && '-mt-8'
      }`}
    >
      {pathname !== '/' && pathname !== '/qr-code-generator' && (
        <div className="flex gap-3 absolute -top-7 justify-center w-full">
          <div className="border p-1 rounded-full border-black flex">
            <Button
              onClick={handlePreview}
              className={`px-3 py-1 rounded-full h-8 w-24 font-bold shadow-none hover:bg-transparent hover:text-gray-400 ${
                preview ? 'bg-black' : 'bg-transparent text-black'
              }`}
            >
              Preview
            </Button>
            <Button
              onClick={handleQr}
              className={`px-3 py-1 rounded-full shadow-none h-8 w-20 uppercase font-bold hover:bg-transparent hover:text-gray-400 ${
                qr ? 'bg-black' : 'bg-transparent text-black'
              }`}
              disabled={url ? false : true}
            >
              Qr
            </Button>
          </div>
        </div>
      )}

      <div className="w-full md:flex justify-center items-center h-full">
        <div
          className={`flex flex-col items-center relative overflow-hidden justify-center w-[63%] rounded-[1.7rem] h-[88%] ${
            (isType || url) && 'bg-white'
          }`}
        >
          {isType && preview && (
            <div className="p-6 text-center space-y-3">
              <figure className="w-24 mx-auto">
                <Image
                  src="/qr_koala_logo.webp"
                  alt="hero"
                  className="w-full h-auto object-contain"
                  width={100}
                  height={100}
                />
              </figure>
              <Typography
                variant={TYPO_STYLES.VARIANT.CAPTION}
                className="!font-light"
              >
                Select a type of QR code to start.
              </Typography>
            </div>
          )}

          {!isType && preview && <View data={form} />}

          {qr && url && (
            <>
              <QRCodeSVG
                value={url}
                size={180}
                imageSettings={
                  form.logo && {
                    src: form.logo,
                    height: 50,
                    width: 50,
                    excavate: true
                  }
                }
              />
            </>
          )}
        </div>
        <div className="bg-phone bg-no-repeat bg-contain bg-center w-full h-full z-50 absolute top-0"></div>
      </div>
    </div>
  )
}
