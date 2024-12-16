import { Button } from '@/components/ui/button'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'
import { Stepper } from '@/data/qrHeader'
import { TYPO_STYLES, Typography } from '@/components/common/typography'

export function Footer() {
  const { form, setStep, step, triggerUpdate, url } = useForm()
  const router = useRouter()

  const handleBack = () => {
    if (step > 1) {
      const previousStep = step - 1 // Calculamos el paso anterior
      setStep(previousStep) // Actualizamos el estado del paso
      router.push(
        Stepper[previousStep - 1].link + (previousStep === 2 ? form.type : '')
      ) // Navegamos a la ruta correspondiente
    }
  }

  const handleNext = () => {
    if (step < Stepper.length) {
      const nextStep = step + 1 // Calculamos el próximo paso
      setStep(nextStep) // Actualizamos el estado del paso
      router.push(Stepper[nextStep - 1].link) // Navegamos a la ruta correspondiente
      nextStep === Stepper.length && triggerUpdate() // Actualizamos el estado de la vista previa
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 shadow px-0 py-3 z-30 border-t bg-white">
      <div className="custom-width flex justify-between gap-3 px-4 md:px-6">
        <Button
          onClick={() => handleBack()}
          disabled={step === 1 && !form.type}
          className="sm:px-10 sm:h-10 px-4 min-w-20 h-10 bg-transparent border border-black hover:bg-black group"
        >
          <Typography
            variant={TYPO_STYLES.VARIANT.MINI}
            className="font-normal group-hover:text-white text-black"
          >
            {Stepper[step > 1 ? step - 2 : 0].title}
          </Typography>
        </Button>
        <Button
          disabled={step === 2 && !url}
          onClick={() => handleNext()}
          className={
            step === Stepper.length
              ? 'hidden'
              : 'sm:px-10 sm:h-10 px-4 min-w-20 h-10'
          }
        >
          Next
        </Button>
      </div>
    </footer>
  )
}
