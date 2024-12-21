import { Pdf } from '@/components/qr/content/pdf'
import { Phone } from '@/components/qr/phone/container'

export const ComponentsMap = {
  pdf: Pdf
}
export function Content({ type }) {
  const Component = ComponentsMap[type] || (() => null)
  return (
    <div className="flex">
      <Component />
      <Phone />
    </div>
  )
}
