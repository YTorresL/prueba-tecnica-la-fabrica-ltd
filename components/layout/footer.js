export function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="max-w-screen-2xl mx-auto pt-14 pb-6 px-5 md:px-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-14 justify-between">
          <div className="space-y-5">
            <div className="flex gap-2 items-center h-fit text-white">
              <div className="flex items-center">
                <figure className="w-10">
                  <img
                    alt="QR KOALA Logo"
                    width="28"
                    height="28"
                    src="/qr_koala_logo.webp"
                  />
                </figure>
                <p className="font-black text-xl mt-1 text-inherit __className_2ec599">
                  QR KOALA
                </p>
              </div>
            </div>
            <p className="text-white font-light w-full md:w-8/12">
              Powerful, yet simple QR code generator suited to all your QR code
              needs as a business or as an individual.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between w-6/12">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Resources</p>
              <div
                href="/signup"
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                role="button"
              >
                Create QR Code
              </div>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/plans-and-pricing"
              >
                Plans and Pricing
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/faq"
              >
                FAQs
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="mailto:help@qrcode-koala.com"
              >
                Contact Us
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Terms</p>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/terms"
              >
                Terms of Service
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/cookie-policy"
              >
                Cookie Policy
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="/refund-policy"
              >
                Refund Policy
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Contact Us</p>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="mailto:help@qrcode-koala.com"
              >
                Support
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="mailto:sales@qrcode-koala.com"
              >
                Sales
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="mailto:public_relations@qrcode-koala.com"
              >
                Public Relations
              </a>
              <a
                className="text-sm text-white text-opacity-80 hover:text-opacity-100 block"
                href="mailto:general_inquires@qrcode-koala.com"
              >
                General Inquires
              </a>
            </div>
          </div>
        </div>
        <div>
          <span className="text-white text-center block font-light">
            © 2024 QR Code Koala · All rights reserved
          </span>
        </div>
      </div>
    </div>
  )
}
