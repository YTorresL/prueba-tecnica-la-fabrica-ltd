import { IconTrack } from '@/assets/icons/track'
import { IconPrint } from '@/assets/icons/print'
import { IconCustom } from '@/assets/icons/custom'
import { IconUnlimitedCode } from '@/assets/icons/unlimitedCode'
import { IconUnlimitedScan } from '@/assets/icons/unlimitedScan'
import { IconEvery } from '@/assets/icons/every'

export const benefits = [
  {
    title: 'Track Scans & Analytics',
    description:
      'Track where your scans are coming from (country, city, device, browser)',
    icon: <IconTrack className="w-24 h-auto" />
  },
  {
    title: 'Editable After Printing',
    description: 'You can edit your codes even after printing them',
    icon: <IconPrint className="w-24 h-auto" />
  },
  {
    title: 'Full Customization',
    description: 'Customize your QR code to match your brand guidelines',
    icon: <IconCustom className="w-24 h-auto" />
  },
  {
    title: 'Unlimited QR Codes',
    description: 'Create as many QR codes as you need',
    icon: <IconUnlimitedCode className="w-24 h-auto" />
  },
  {
    title: 'Unlimited Scans',
    description: 'No limit of scans for any of your QR codes',
    icon: <IconUnlimitedScan className="w-24 h-auto" />
  },
  {
    title: 'QR Codes For Every Need',
    description: 'We have a QR code for every need you may have',
    icon: <IconEvery className="w-24 h-auto" />
  }
]
