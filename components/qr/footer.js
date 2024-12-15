import { Button } from '../ui/button'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'
import { Stepper } from '@/data/qrHeader'

export function Footer() {
  const { form, setStep, step } = useForm()
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
    }
  }

  return (
    <footer className="fixed bottom-0 flex justify-between w-full">
      <Button onClick={() => handleBack()} disabled={step === 1 && !form.type}>
        Back
      </Button>
      <Button
        disabled={step === Stepper.length || (step === 2 && !form.file)}
        onClick={() => handleNext()}
        className={step === Stepper.length ? 'hidden' : ''}
      >
        Next
      </Button>
    </footer>
  )
}
