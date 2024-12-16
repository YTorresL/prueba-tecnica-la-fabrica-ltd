import { Pdf } from '@/components/qr/content/pdf'
import { VCard } from '@/components/qr/content/vCard'
import { Website } from '@/components/qr/content/website'
import { Phone } from '@/components/qr/phone/container'

export const ComponentsMap = {
  website: Website,
  pdf: Pdf,
  vcard: VCard
}
export function Content({ type }) {
  const Component = ComponentsMap[type]
  return (
    <div className="flex">
      <Component />
      <Phone />
    </div>
  )
}
