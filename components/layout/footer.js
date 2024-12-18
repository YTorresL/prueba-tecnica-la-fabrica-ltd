import { footer } from '@/data/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@/components/common/typography'

export function Footer() {
  return (
    <div className="bg-black w-full text-white">
      <div className="max-w-screen-2xl mx-auto pt-14 pb-6 px-5 md:px-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-14 justify-between">
          <div className="space-y-5">
            <div className="flex gap-2 items-center h-fit text-white">
              <div className="flex items-center">
                <figure className="w-10">
                  <Image
                    alt="QR KOALA Logo"
                    width={28}
                    height={28}
                    src="/qr_koala_logo.webp"
                  />
                </figure>
                <p className="font-black text-xl mt-1 text-inherit">QR KOALA</p>
              </div>
            </div>
            <Typography className="md:w-8/12">
              Powerful, yet simple QR code generator suited to all your QR code
              needs as a business or as an individual.
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between w-6/12">
            {footer.map((section, index) => (
              <div className="space-y-2" key={index}>
                <Typography className="text-sm font-semibold">
                  {section.title}
                </Typography>
                {section.links.map((link, index) => (
                  <Link
                    className="text-sm text-opacity-80 hover:text-opacity-100 block"
                    key={index}
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <hr className="border-none h-[0.1px] bg-white/20"></hr>
        <div>
          <Typography className={'text-center'}>
            © 2024 QR Code Koala · All rights reserved
          </Typography>
        </div>
      </div>
    </div>
  )
}
