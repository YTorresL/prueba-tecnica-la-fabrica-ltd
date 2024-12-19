import { Stepper } from '@/data/qrHeader'
import { useForm } from '@/hooks/useForm'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const { step, form, setStep } = useForm()

  // Buscar el paso actual y obtener su información
  const currentStep = Stepper.find((s) => s.id === step)

  return (
    <header className="fixed top-0 w-full flex justify-between items-center border-b border-gray-200 h-[4rem] px-5 md:px-10 backdrop-blur-lg z-10 bg-white/70 backdrop-saturate-150">
      <Link className="w-10" href="/">
        <Image
          alt="QR KOALA Logo"
          width={28}
          height={28}
          src="/qr_koala_logo.webp"
        />
      </Link>
      <ol className="flex items-center w-full p-3 space-x-2 justify-center text-sm font-medium text-center sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        {Stepper.map((step) => (
          <Link
            className={`flex items-center ${
              currentStep.id >= step.id
                ? 'text-black'
                : 'text-gray-300 pointer-events-none'
            }`}
            key={step.id}
            href={
              form.type.length && step.id === 2
                ? step.link + form.type
                : step.link
            }
            onClick={() => setStep(step.id)}
          >
            <span
              className={`flex items-center justify-center w-5 h-5 text-xs me-2 ${
                currentStep.id >= step.id ? 'bg-black' : 'bg-gray-300'
              } rounded-full shrink-0 text-white`}
            >
              {step.id}
            </span>
            {step.title}
          </Link>
        ))}
      </ol>
    </header>
  )
}
