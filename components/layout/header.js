import { TYPO_STYLES, Typography } from '../common/typography'

export function Header() {
  return (
    <header className="border-b flex justify-between items-center h-[4rem] px-5 md:px-10 backdrop-blur-lg sticky top-0 z-10 bg-white/70 backdrop-saturate-150">
      <div className="w-10 flex items-center gap-3">
        <img
          src="/qr_koala_logo.webp"
          alt="hero"
          className="w-full h-auto object-contain mx-auto"
        />
        <Typography
          variant={TYPO_STYLES.VARIANT.CAPTION}
          className="flex-shrink-0"
        >
          QR KOALA
        </Typography>
      </div>
    </header>
  )
}
