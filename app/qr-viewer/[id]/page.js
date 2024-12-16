'use client'
import { View } from '@/components/qr/phone/view'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getQr } from '@/services/firebase/client'

export default function Page() {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getQr(id).then((data) =>
      setData({
        ...data,
        id
      })
    )
  }, [id])

  return <View data={data} />
}
