import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Typography, TYPO_STYLES } from '@/components/common/typography'

const isColorDark = (color) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return { r, g, b }
  }

  const { r, g, b } = hexToRgb(color)

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < 128
}

export function View({ data }) {
  const backgroundColor =
    (data.type && data.file) || data.backgroundColor
      ? data.backgroundColor
      : '#5400F5'

  const buttonColor =
    (data.type && data.file) || data.buttonColor ? data.buttonColor : '#6B3FBB'

  const textColor = isColorDark(backgroundColor) ? 'text-white' : 'text-black'

  const textButtonColor = isColorDark(buttonColor) ? 'white' : 'black'

  const pathname = usePathname()

  const isViewer = pathname === `/qr-viewer/${data.id}`

  return (
    <div
      className={`${
        isViewer
          ? 'space-y-3 md:space-y-5 max-w-lg mx-auto relative h-fit min-h-dvh text-center'
          : 'w-full h-full text-center rounded-[38px] bg-white relative mobile-scrollbar'
      }`}
    >
      <div
        className={`${
          isViewer ? '' : 'absolute top-0 left-0 right-0 bottom-0 overflow-auto'
        }`}
      >
        <div
          className={` ${
            isViewer
              ? 'relative pb-16 min-h-[25dvh]'
              : 'relative pb-16 min-h-[40%]'
          } ${textColor}`}
        >
          <div className="relative z-[1] space-y-2 px-6 py-10">
            <Typography className="break-words text-[12px]">
              {(data.type && data.file) || data.company
                ? data.company
                : 'Enterprise Solutions Corp.'}
            </Typography>
            <Typography tag="h1" className="font-bold text-[16px]">
              {(data.type && data.file) || data.pdfTitle
                ? data.pdfTitle
                : 'Yearly Review'}
            </Typography>
            <Typography className="break-words text-[12px]">
              {(data.type && data.file) || data.description
                ? data.description
                : 'Our most successful year to date! Discover our unprecedented achievements in our yearly review.'}
            </Typography>
          </div>

          <div className="absolute left-0 right-0 top-0 bottom-0 overflow-x-hidden h-full">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1282 1753"
              xmlns="http://www.w3.org/2000/svg"
              fill={backgroundColor}
            >
              <path d="M1281 1H1V1660.25C201.058 1553.81 440.942 1553.81 641 1660.25C836.823 1782.48 1085.18 1782.48 1281 1660.25V1Z" />
            </svg>
          </div>
        </div>

        <div className="relative px-6 -mt-20 pb-10 z-10 space-y-2">
          <div className="w-full bg-white p-3 rounded-md space-y-4 border border-gray-300">
            {data.type && data.file ? (
              <iframe
                src={data.file}
                width="100%"
                height="100%"
                className="rounded-lg w-full h-full border-none"
              ></iframe>
            ) : (
              <Image
                src="https://qr-code-koala.com/qrs-previews%2Fpdf-preview.webp"
                alt="QR Code"
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            )}

            <button
              className="group relative inline-flex items-center justify-center w-full h-12 font-semibold rounded-small transition-transform transform hover:scale-[0.97]"
              type="button"
              style={{
                backgroundColor: buttonColor,
                color: textButtonColor
              }}
              onClick={() => window.open(data.file)}
            >
              <Typography className="truncate w-10/12">
                {data.button || 'View PDF'}
              </Typography>
            </button>
          </div>
          {(data.website || (!data.type && !data.file)) && (
            <div className="w-full bg-white p-3 rounded-md flex gap-2 items-center justify-between border border-gray-300 group hover:cursor-pointer">
              <div className="flex-1 truncate">
                <Typography className="text-xs text-blue-500 group-hover:underline truncate">
                  {data.website || 'https://example.com'}
                </Typography>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
