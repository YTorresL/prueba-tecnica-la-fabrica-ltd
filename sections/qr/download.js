import QRCode from 'react-qr-code'
import { useForm } from '@/hooks/useForm'
import Link from 'next/link'

export function Download() {
  const { url } = useForm()

  return (
    <>
      <div className="border border-gray-300 rounded-lg hidden md:flex flex-col justify-center space-y-5 p-12 relative">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="text-black">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="35"
                width="35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-center">
              Your QR Code Is Ready
            </h2>
          </div>
          <h3 className="font-medium text-center">
            Scan it now to see how it works!
          </h3>
        </div>
        <div className="hidden xl:block absolute top-24 right-0 rotate-[160deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1200"
            width="150"
            height="150"
          >
            <path d="M261.6 1019.2c-55.562-141-42-329.28 110.4-404.4 70.801-35.039 163.68-26.879 222.6 27.84 45.719 42.48 48 115.8-18 136.68-47.027 12.961-97.422 2.367-135.24-28.441-142.92-114.84-17.281-303.36 106.92-366.84 144-73.801 317.64-66.961 459.84 6 20.641 10.559 38.879-20.52 18.238-31.078-154.2-79.078-340.68-86.039-496.32-6-126.84 65.039-231.72 211.08-166.32 355.92 13.953 30.867 35.914 57.434 63.598 76.953s60.086 31.273 93.844 34.047c54.719 4.559 124.56-16.801 144-74.16 22.68-65.52-35.281-129.96-88.559-159.36a239.943 239.943 0 0 0-96.121-28.16 239.97 239.97 0 0 0-99.242 13.52c-186.84 67.922-219.36 292.32-154.32 457.08 8.398 21.238 43.199 12 34.68-9.602z"></path>
            <path d="M897.96 251.04A1613.345 1613.345 0 0 1 1032 384l3.719-28.199a1265.581 1265.581 0 0 0-187.92 118.92c-18.121 13.922 0 45.238 18.238 31.078v.004a1258.595 1258.595 0 0 1 187.8-118.92 18.24 18.24 0 0 0 3.719-28.321 1614.196 1614.196 0 0 0-133.56-132.96c-17.281-15.238-42.961 10.199-25.441 25.44z"></path>
          </svg>
        </div>
        {url && (
          <Link href={url}>
            <QRCode value={url} size={300} className="mx-auto cursor-pointer" />
          </Link>
        )}

        <p className="text-center text-sm text-gray-custom">
          You can now scan your QR code with your phone to see it in action
        </p>
      </div>
    </>
  )
}
