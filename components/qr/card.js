'use client'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'

export function Card({ data }) {
  const router = useRouter()
  const { setForm, setStep } = useForm()

  const handleClick = () => {
    setStep(2)
    router.push(data.link)
    setForm((prev) => ({ ...prev, type: data.slug }))
  }

  return (
    <div
      className="p-4 border border-gray-200 rounded-lg cursor-pointer"
      onClick={() => handleClick()}
      href={data.link}
    >
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  )
}
