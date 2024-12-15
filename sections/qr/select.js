import { Card } from '@/components/qr/card'
import { Types } from '@/data/qrTypes'

export function SelectType() {
  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-2 w-3/5">
        {Types.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div
        className="w-2/5 bg-phone bg-no-repeat bg-contain bg-center hidden md:block h-[500px]
      "
      ></div>
    </div>
  )
}
