'use client'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/navigation'
import { Typography, TYPO_STYLES } from '@/components/common/typography'

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
      className="flex md:block items-center justify-between p-5 hover:border-black border hover:bg-black transition-all h-full group bg-white rounded-md shadow"
      onClick={() => handleClick()}
      onMouseOver={() => setForm((prev) => ({ ...prev, type: data.slug }))}
      onMouseLeave={() => setForm((prev) => ({ ...prev, type: '' }))}
      href={data.link}
    >
      <div className="flex text-center flex-row md:flex-col items-center justify-start md:justify-center gap-2 md:gap-3">
        <div className="w-14 h-14 p-2 lg:w-20 lg:h-20 lg:p-3 bg-black rounded-full border-2 border-black group-hover:border-white"></div>
        <div>
          <Typography
            variant={TYPO_STYLES.VARIANT.CARD}
            className="group-hover:text-white"
          >
            {data.title}
          </Typography>
          <Typography
            variant={TYPO_STYLES.VARIANT.MINI}
            className="group-hover:text-white"
          >
            {data.description}
          </Typography>
        </div>
      </div>
    </div>
  )
}
