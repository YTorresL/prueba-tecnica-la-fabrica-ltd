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
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const pathname = usePathname()

  // Valida si el formulario cumple los requisitos mínimos para ser enviado
  useEffect(() => {
    const isValidForm = form.type && form.file
    setIsFormValid(isValidForm)
  }, [form])

  // Si la URL contiene un tipo de QR, se establece el tipo en el formulario y se cambia al paso 2 automáticamente
  useEffect(() => {
    const pathSegments = pathname.split('/')
    const typeParam =
      pathSegments[pathSegments.indexOf('qr-code-generator') + 1]
    if (typeParam) {
      setForm((prev) => ({
        ...prev,
        type: typeParam
      }))
      setStep(2)
    }
  }, [pathname])

  // Si el formulario es válido y no ha sido enviado, se envía al servidor
  useEffect(() => {
    if (isFormValid && !isSubmitted) {
      setLoading(true)
      setIsSubmitted(true)
      addQr(form)
        .then((docRef) => {
          setId(docRef.id)
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isFormValid, isSubmitted])

  // Se guarda la id del documento en el estado y se genera la URL de visualización del QR
  useEffect(() => {
    if (id) {
      setUrl(`${window.location.origin}/qr-viewer/${id}`)
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Actualiza el documento en la base de datos con los nuevos valores del formulario
  const qrUpdate = () => {
    updateQr(id, form)
      .then(() => {
        console.log('Document successfully updated!')
      })
      .catch((error) => {
        console.error('Error updating document: ', error)
      })
      .finally(() => {
        setLoading(false)
      })
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
        qrUpdate
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
