'use client'
import { addQr } from '@/services/firebase/client'
import { createContext, useState } from 'react'

export const FormContext = createContext()

const initForm = {
  type: '',
  file: '',
  backgroundColor: '',
  buttonColor: '',
  company: '',
  pdfTitle: '',
  description: '',
  website: '',
  button: '',
  frame: ''
}

export function FormProvider({ children }) {
  const [form, setForm] = useState(initForm)
  const [step, setStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    addQr(form)
      .then(() => {
        console.log('Document successfully written!')
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        step,
        setStep,
        handleSubmit,
        handleChange
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
