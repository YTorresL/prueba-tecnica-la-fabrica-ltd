import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Phone } from '@/components/qr/phone/container'

export function Design() {
  return (
    <div className="flex">
      <form className="flex flex-col gap-3 w-2/3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>icon</p>
              <div className="w-full ml-5">
                <h2>Is the QR code accessible?</h2>
                <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
      <Phone />
    </div>
  )
}
