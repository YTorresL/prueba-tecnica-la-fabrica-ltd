'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    if (!form.type || !form.file) {
      router.push('/qr-code-generator')
    }
  }, [form])

  return (
    <>
      <section className="min-h-screen custom-width px-4 py-[80px]">
        <h1 className="text-3xl font-bold mt-10">QR Generator</h1>
      </section>
    </>
  )
}
