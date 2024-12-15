'use client'
import { IconPdf } from '@/assets/icons/pdf'
import { IconUpload } from '@/assets/icons/upload'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@/hooks/useForm'
import { uploadFile } from '@/services/firebase/client'
import { useEffect, useState } from 'react'

const PDF_STATES = {
  ERROR: -1,
  SUCCESS: 1,
  NONE: 2,
  LOADING: 3
}

export function Pdf() {
  const [pdf, setPdf] = useState(null)
  const { handleChange, form } = useForm()
  const [pdfState, setPdfState] = useState(PDF_STATES.NONE)
  console.log(form)

  useEffect(() => {
    if (pdfState === PDF_STATES.SUCCESS) {
      handleChange({
        target: {
          name: 'file',
          value: pdf
        }
      })
    }
  }, [pdfState])

  const handleChangePDF = (e) => {
    e.preventDefault()
    setPdfState(PDF_STATES.LOADING)
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
        setPdfState(PDF_STATES.ERROR)
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          setPdf(url)
          setPdfState(PDF_STATES.SUCCESS)
        })
      }
    )
  }

  return (
    <div className="flex w-full">
      <form className="flex flex-col gap-3 w-3/5">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="bg-white px-5 rounded-lg border"
          >
            <AccordionTrigger className="!no-underline">
              <figure className="p-1 border rounded-lg">
                <IconPdf className="w-10 h-10" />
              </figure>

              <div className="w-full ml-5">
                <h2 className="text-lg font-semibold">
                  PDF File<span className="text-red-500"> *</span>
                </h2>
                <p className="text-base text-gray-400 font-normal -mt-1">
                  Upload the PDF file you want to display.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative group w-full cursor-pointer border-t pt-8">
                <div className="grid place-content-center gap-3 py-8 border-2 bg-opacity-5 border-dashed rounded-md w-full">
                  <div className="text-primary mx-auto">
                    <IconUpload className="w-10 h-10" />
                  </div>
                  <Button>Select your PDF</Button>
                  <span className="font-normal text-center text-sm text-primary">
                    Or drop your files here
                  </span>
                  <span className="font-semibold text-xs text-center text-black">
                    Maximum size: 100 MB
                  </span>
                </div>
                <input
                  className="appearance-none absolute opacity-0 top-0 bottom-0 left-0 right-0 z-10 cursor-pointer"
                  id="pdf"
                  accept="application/pdf"
                  placeholder="Select your PDF"
                  autoComplete="off"
                  type="file"
                  name="file"
                  onChange={handleChangePDF}
                  onDragOver={(e) => e.preventDefault()}
                />
              </div>
              <div className="flex items-center space-x-2 mt-5">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="bg-white px-5 rounded-lg border"
          >
            <AccordionTrigger className="!no-underline">
              <figure className="p-1 border rounded-lg">
                <IconPdf className="w-10 h-10" />
              </figure>

              <div className="w-full ml-5">
                <h2 className="text-lg font-semibold">Design</h2>
                <p className="text-base text-gray-400 font-normal -mt-1">
                  Choose the colors of your page.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex cursor-pointer justify-center gap-6 border-t pt-8"></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="bg-white px-5 rounded-lg border"
          >
            <AccordionTrigger className="!no-underline">
              <figure className="p-1 border rounded-lg">
                <IconPdf className="w-10 h-10" />
              </figure>

              <div className="w-full ml-5">
                <h2 className="text-lg font-semibold">PDF information</h2>
                <p className="text-base text-gray-400 font-normal -mt-1">
                  Add a some context to your PDF.
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="cursor-pointer border-t pt-8 grid gap-4">
                <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                  <Label htmlFor="company" className="text-base">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="E.g. Google"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                  <Label htmlFor="pdfTile" className="text-base">
                    PDF title
                  </Label>
                  <Input
                    id="pdfTile"
                    name="pdfTile"
                    type="text"
                    placeholder="E.g. Annual Report 2021"
                    value={form.pdfTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                  <Label htmlFor="description" className="text-base">
                    Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="E.g. Our annual report for 2021"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </div>
  )
}
