import { useForm } from '@/hooks/useForm'

export function Phone() {
  const { form } = useForm()

  const isType = form.type.length === 0 ? true : false

  return (
    <div className="w-2/6 hidden md:flex justify-center items-center h-[600px] sticky -mt-20">
      <div
        className={`flex flex-col items-center relative overflow-hidden justify-center w-[63%] rounded-xl h-[88%] ${
          isType && 'bg-white'
        }`}
      >
        {isType && (
          <div className="p-6 text-center">
            <figure>
              <p>icon</p>
            </figure>
            <p>
              Select a type to see the preview of the QR code on your phone.
            </p>
          </div>
        )}

        {!isType && (
          <div className="w-full h-full text-center rounded-[38px] bg-white relative mobile-scrollbar">
            <div
              id="pdf-container"
              className="absolute top-0 left-0 right-0 bottom-0 overflow-auto"
            >
              <div className="relative pb-16 min-h-[40%]">
                <div className="relative z-[1] space-y-2 px-6 py-10 text-black">
                  <p
                    className="text-sm font-medium break-words"
                    style={{ fontSize: '12px' }}
                  >
                    {form.company || 'Enterprise Solutions'}
                  </p>
                  <h1
                    className="text-lg font-bold block break-words"
                    style={{ fontSize: '16px' }}
                  >
                    Yearly Review
                  </h1>
                  <p
                    className="text-sm font-medium break-words"
                    style={{ fontSize: '12px' }}
                  >
                    Our most successful year to date! Discover our unprecedented
                    achievements in our yearly review.
                  </p>
                </div>

                <div className="absolute left-0 right-0 top-0 bottom-0 overflow-x-hidden h-full text-[rgb(0,244,212)]">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 1282 1753"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M1281 1H1V1660.25C201.058 1553.81 440.942 1553.81 641 1660.25C836.823 1782.48 1085.18 1782.48 1281 1660.25V1Z" />
                  </svg>
                </div>
              </div>

              <div className="relative px-6 -mt-20 pb-10 z-10 space-y-2">
                <div className="w-full bg-white p-3 rounded-md space-y-4 border border-gray-300">
                  <img
                    src="https://qr-code-koala.com/qrs-previews%2Fpdf-preview.webp"
                    alt="QR Code"
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto"
                  />
                  <button
                    className="group relative inline-flex items-center justify-center w-full h-12 font-semibold text-black bg-[rgb(45,181,163)] rounded-small transition-transform transform hover:scale-[0.97]"
                    type="button"
                  >
                    <span className="truncate w-10/12">View PDF</span>
                  </button>
                </div>

                <div
                  role="button"
                  className="w-full bg-white p-3 rounded-md flex gap-2 items-center justify-between border border-gray-300 group hover:cursor-pointer"
                >
                  <div className="flex-1 truncate">
                    <span className="text-xs text-blue-500 group-hover:underline truncate">
                      www.enterprise-solutions.com
                    </span>
                  </div>
                  <div className="flex-0 text-gray-500 group-hover:text-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M184 112l144 144-144 144"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-phone bg-no-repeat bg-contain bg-center w-full h-full z-50 absolute top-0"></div>
    </div>
  )
}
