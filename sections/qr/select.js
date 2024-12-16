import { Card } from '@/components/qr/card'
import { Types } from '@/data/qrTypes'
import { Phone } from '@/components/qr/phone/container'

export function SelectType() {
  return (
    <div className="flex">
      <div className="w-2/3 max-w-[1050px] mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {Types.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </div>
      <Phone />
    </div>
  )
}
