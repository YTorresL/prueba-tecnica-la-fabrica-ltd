'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from '@/hooks/useForm'
import { Download } from '@/sections/qr/download'
import Link from 'next/link'

export default function Page() {
  const { form, url } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (!form.type || !form.file) {
      router.push('/qr-code-generator')
    }
  }, [form])

  return (
    <>
      <section className="custom-width space-y-5 md:space-y-7 w-full relative p-4 md:p-6">
        <div className="w-full">
          <div className="flex items-center">
            <Link className="w-10" href="/qr-code-generator">
              <img
                alt="QR KOALA Logo"
                src="/qr_koala_logo.webp"
                width="28"
                height="28"
              />
            </Link>
            <p className="font-black text-xl mt-1">QR KOALA</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Download />
        </div>
      </section>
    </>
  )
}
