import { FormContext } from '@/context/useForm'
import { useContext } from 'react'

export function useForm() {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider')
  }

  return context
}
