'use client'
import { addQr, updateQr } from '@/services/firebase/client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect } from 'react'

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
  logo: ''
}

export function FormProvider({ children }) {
  const [form, setForm] = useState(initForm)
  const [step, setStep] = useState(1)
  const [id, setId] = useState('')
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  console.log(form)

  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)

  const pathname = usePathname()

  // Valida si el formulario cumple los requisitos mínimos
  useEffect(() => {
    const isValidForm = form.type && form.file
    setIsFormValid(isValidForm)
  }, [form])

  console.log(step)

  useEffect(() => {
    const pathSegments = pathname.split('/') // Divide la ruta por "/"
    const typeParam =
      pathSegments[pathSegments.indexOf('qr-code-generator') + 1]
    if (typeParam) {
      setForm((prev) => ({
        ...prev,
        type: typeParam // Asigna el parámetro "type" al formulario
      }))
      setStep(2)
    }
  }, [pathname])

  useEffect(() => {
    if (isFormValid && !isSubmitted) {
      setLoading(true)
      setIsSubmitted(true)
      addQr(form)
        .then((docRef) => {
          setId(docRef.id) // Almacena el ID generado
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isFormValid, isSubmitted])

  // Actualiza el documento una vez que se tenga el ID y se necesite actualizar con más datos
  useEffect(() => {
    if (id && isUpdated) {
      setLoading(true)
      updateQr(id, form)
        .then(() => {
          console.log('Document successfully updated!')
          setIsUpdated(false)
        })
        .catch((error) => {
          console.error('Error updating document: ', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [id, isUpdated])

  // Genera la URL una vez que se obtiene el ID
  useEffect(() => {
    if (id) {
      setUrl(`${window.location.origin}/qr-view/${id}`)
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const triggerUpdate = () => {
    setIsUpdated(true)
  }

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        step,
        setStep,
        handleChange,
        url,
        loading,
        triggerUpdate
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
