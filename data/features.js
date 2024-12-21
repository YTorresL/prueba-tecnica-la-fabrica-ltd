import { IconHomeDesign } from '@/assets/icons/homeDesign'
import { IconSelect } from '@/assets/icons/select'
import { IconDownload } from '@/assets/icons/download'

export const features = [
  {
    title: 'Select',
    description: 'Choose the type of QR code that you need',
    icon: <IconSelect className="w-24 h-auto" />
  },
  {
    title: 'Design',
    description: 'Customize and design of your QR code',
    icon: <IconHomeDesign className="w-24 h-auto" />
  },
  {
    title: 'Download',
    description: 'Download and print your new QR code',
    icon: <IconDownload className="w-24 h-auto" />
  }
]
