'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Phone } from '@/components/qr/phone/container'
import { Button } from '@/components/ui/button'
import { IconPdf } from '@/assets/icons/pdf'
import { IconUpload } from '@/assets/icons/upload'
import { Typography, TYPO_STYLES } from '@/components/common/typography'
import { useForm } from '@/hooks/useForm'
import { useEffect, useState } from 'react'
import { uploadFile } from '@/services/firebase/client'

const LOGO_STATES = {
  ERROR: -1,
  SUCCESS: 1,
  NONE: 2,
  LOADING: 3
}

export function Design() {
  const [logoState, setLogoState] = useState(LOGO_STATES.NONE)
  const [logo, setLogo] = useState(null)
  const { handleChange } = useForm()

  useEffect(() => {
    if (logoState === LOGO_STATES.SUCCESS) {
      handleChange({
        target: {
          name: 'logo',
          value: logo
        }
      })
    }
  }, [logoState])

  const handleChangeLogo = (e) => {
    e.preventDefault()
    setLogoState(LOGO_STATES.LOADING)
    const file = e.target.files[0]
    const task = uploadFile(file)

    task.on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(percentage)
      },
      (error) => {
        console.error(error)
        setLogoState(LOGO_STATES.ERROR)
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          setLogo(url)
          setLogoState(LOGO_STATES.SUCCESS)
        })
      }
    )
  }

  return (
    <div className="flex">
      <form className="flex flex-col gap-3 w-2/3">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="bg-white px-5 rounded-lg border border-gray-300"
          >
            <AccordionTrigger className="!no-underline">
              <figure className="p-1 border border-black rounded-md">
                <IconPdf className="w-10 h-10" />
              </figure>

              <div className="w-full ml-5">
                <Typography tag="h2" variant={TYPO_STYLES.VARIANT.BODY}>
                  Add Logo
                </Typography>
                <Typography
                  variant={TYPO_STYLES.VARIANT.MINI}
                  className="font-normal text-gray-400"
                >
                  Make your QR code more recognizable by adding your logo.
                </Typography>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative group w-full cursor-pointer border-t pt-8">
                <div className="grid place-content-center gap-3 py-8 border-2 bg-opacity-5 border-dashed rounded-md w-full">
                  <div className="text-primary mx-auto">
                    <IconUpload className="w-10 h-10" />
                  </div>
                  <Button>Select your logo</Button>
                  <span className="font-normal text-center text-sm text-primary">
                    Or drop your files here
                  </span>
                  <span className="font-semibold text-xs text-center text-black">
                    Maximum size: 100 MB
                  </span>
                </div>
                <input
                  className="appearance-none absolute opacity-0 top-0 bottom-0 left-0 right-0 z-10 cursor-pointer"
                  id="logo"
                  accept=".png, .jpg, .jpeg"
                  placeholder="Select your PDF"
                  autoComplete="off"
                  type="file"
                  name="logo"
                  onChange={handleChangeLogo}
                  onDragOver={(e) => e.preventDefault()}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
      <Phone />
    </div>
  )
}
