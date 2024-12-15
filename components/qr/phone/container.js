'use client'
import { useForm } from '@/hooks/useForm'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { View } from './view'

export function Phone() {
  const { form, url } = useForm()
  const [preview, setPreview] = useState(true)
  const [qr, setQr] = useState(false)

  const isType = form.type.length === 0 ? true : false

  const handlePreview = () => {
    setPreview(true)
    setQr(false)
  }

  const handleQr = () => {
    setQr(true)
    setPreview(false)
  }

  return (
    <div className="w-2/6 hidden md:block sticky -mt-10 h-[600px]">
      <div className="flex gap-3 absolute -top-5 justify-center w-full">
        <Button onClick={handlePreview}>Preview</Button>
        <Button onClick={handleQr} disabled={url ? false : true}>
          Qr
        </Button>
      </div>

      <div className="w-full md:flex justify-center items-center h-full">
        <div
          className={`flex flex-col items-center relative overflow-hidden justify-center w-[63%] rounded-xl h-[88%] ${
            (isType || url) && 'bg-white'
          }`}
        >
          {isType && preview && (
            <div className="p-6 text-center">
              <figure>
                <p>icon</p>
              </figure>
              <p>
                Select a type to see the preview of the QR code on your phone.
              </p>
            </div>
          )}

          {!isType && preview && <View data={form} />}

          {qr && <QRCode value={url} size={180} />}
        </div>
        <div className="bg-phone bg-no-repeat bg-contain bg-center w-full h-full z-50 absolute top-0"></div>
      </div>
    </div>
  )
}
