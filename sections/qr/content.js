import { Pdf } from '@/components/qr/content/pdf'
import { VCard } from '@/components/qr/content/vCard'
import { Website } from '@/components/qr/content/website'

export const ComponentsMap = {
  website: Website,
  pdf: Pdf,
  vcard: VCard
}
export function Content({ type }) {
  const Component = ComponentsMap[type]
  return (
    <>
      <Component />
    </>
  )
}
