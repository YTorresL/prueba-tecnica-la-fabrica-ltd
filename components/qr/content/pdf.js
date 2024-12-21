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
import { IconDesign } from '@/assets/icons/design'
import { IconInformation } from '@/assets/icons/information'
import { Typography, TYPO_STYLES } from '@/components/common/typography'
import { IconPen } from '@/assets/icons/pen'

const PDF_STATES = {
  ERROR: -1,
  SUCCESS: 1,
  NONE: 2,
  LOADING: 3
}

const colorPalettes = [
  {
    id: 1,
    background: '#e0e0e0',
    button: '#5D2DB5'
  },
  {
    id: 2,
    background: '#F50057',
    button: '#B52D5D'
  },
  {
    id: 3,
    background: '#FFC400',
    button: '#FF6D00'
  },
  {
    id: 4,
    background: '#00BFA5',
    button: '#00BFA8'
  },
  {
    id: 5,
    background: '#6200EA',
    button: '#304FFE'
  }
]

export function Pdf() {
  const [pdf, setPdf] = useState(null)
  const { handleChange, form } = useForm()
  const [pdfState, setPdfState] = useState(PDF_STATES.NONE)

  const [colorPalette, setColorPalette] = useState(1)
  const [palettes, setPalettes] = useState(colorPalettes)
  const [background, setBackground] = useState(
    palettes[colorPalette - 1].background
  )
  const [button, setButton] = useState(palettes[colorPalette - 1].button)

  useEffect(() => {
    setBackground(palettes[colorPalette - 1].background)
    setButton(palettes[colorPalette - 1].button)
  }, [colorPalette, palettes])

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

  const handlePalette = (id) => {
    setColorPalette(id)
    updatePalette(background, button)
  }

  const handleBackground = (color) => {
    setBackground(color)
    updatePalette(color, button)
  }

  const handleButton = (color) => {
    setButton(color)
    updatePalette(background, color)
  }

  const updatePalette = (newBackground, newButton) => {
    const updatedPalettes = palettes.map((palette) =>
      palette.id === colorPalette
        ? { ...palette, background: newBackground, button: newButton }
        : palette
    )
    setPalettes(updatedPalettes)
  }

  useEffect(() => {
    handleChange({
      target: {
        name: 'backgroundColor',
        value: background
      }
    })
  }, [background])

  useEffect(() => {
    handleChange({
      target: {
        name: 'buttonColor',
        value: button
      }
    })
  }, [button])

  return (
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
                PDF File<span className="text-red-500"> *</span>
              </Typography>
              <Typography
                variant={TYPO_STYLES.VARIANT.MINI}
                className="font-normal text-gray-400"
              >
                Upload the PDF file you want to display.
              </Typography>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative group w-full cursor-pointer border-t pt-8">
              <div className="grid place-content-center gap-3 py-8 border-2 bg-opacity-5 border-dashed rounded-md w-full">
                <div className="mx-auto">
                  <IconUpload className="w-10 h-10" />
                </div>
                <Button>Select your PDF</Button>
                <Typography tag="span" className="text-center text-sm">
                  Or drop your files here
                </Typography>
                <Typography tag="span" className="text-center text-xs">
                  Maximum size: 100 MB
                </Typography>
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
            <div className="flex items-center space-x-2 mt-5 bg-gray-100 border border-gray-300 p-4 rounded-md">
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
          value="item-2"
          className="bg-white px-5 rounded-lg border border-gray-300"
        >
          <AccordionTrigger className="!no-underline">
            <figure className="p-1 border border-black rounded-md">
              <IconDesign className="w-10 h-10" />
            </figure>

            <div className="w-full ml-5">
              <Typography tag="h2" variant={TYPO_STYLES.VARIANT.BODY}>
                Design
              </Typography>
              <Typography
                variant={TYPO_STYLES.VARIANT.MINI}
                className="font-normal text-gray-400"
              >
                Choose the colors of your page.
              </Typography>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 border-t pt-5">
              <Typography
                className="text-gray-500"
                variant={TYPO_STYLES.VARIANT.MINI}
              >
                Color Palette
              </Typography>
              <div className="bg-gray-100 border border-gray-300 p-3 rounded-md space-y-5">
                <div className="flex gap-2 flex-wrap items-center justify-between">
                  {palettes.map((color) => (
                    <div
                      className={`bg-white border  p-1 h-9 sm:h-12 flex gap-1 rounded-md ${
                        colorPalette === color.id
                          ? 'border-black'
                          : 'border-gray-300'
                      }`}
                      role="button"
                      onClick={() => handlePalette(color.id)}
                      key={color.id}
                    >
                      <div
                        className={`w-9 sm:w-12 h-full rounded-sm border border-gray-300`}
                        style={{
                          backgroundColor: color.background
                        }}
                      ></div>
                      <div
                        className={`w-9 sm:w-12 h-full rounded-sm border border-gray-300`}
                        style={{
                          backgroundColor: color.button
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3 md:gap-5">
                  <div className="w-full">
                    <label
                      className="block text-gray-500 mb-2 text-left text-sm break-words font-semibold"
                      htmlFor="primary_color"
                    >
                      Background Color
                    </label>
                    <div className="flex items-center justify-between rounded-lg h-[50.33px] pl-3 pr-1 md:pr-1 bg-white border border-gray-300">
                      <div className="flex-1">
                        <input
                          id="primary_color"
                          className="appearance-none rounded-lg w-full py-3 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline font-semibold text-center uppercase"
                          autoComplete="off"
                          placeholder="#000000"
                          value={background}
                          onChange={(e) => handleBackground(e.target.value)}
                          name="primary_color"
                        />
                      </div>
                      <div className="h-10 w-10 relative">
                        <div
                          className="absolute inset-0 w-full h-full grid place-content-center rounded-lg"
                          style={{ backgroundColor: background }}
                        >
                          <IconPen className="w-5 h-5" fill="#fff" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      className="block text-gray-500 mb-2 text-left text-sm break-words font-semibold"
                      htmlFor="secondary_color"
                    >
                      Button Color
                    </label>
                    <div className="flex items-center justify-between rounded-lg h-[50.33px] pl-3 pr-1 md:pr-1 bg-white border border-gray-300">
                      <div className="flex-1">
                        <input
                          id="secondary_color"
                          className="appearance-none rounded-lg w-full py-3 px-3 text-gray-900 leading-5 focus:outline-none focus:shadow-outline font-semibold text-center uppercase"
                          autoComplete="off"
                          placeholder="#000000"
                          value={button}
                          onChange={(e) => handleButton(e.target.value)}
                          name="secondary_color"
                        />
                      </div>
                      <div className="h-10 w-10 relative">
                        <div
                          className="absolute inset-0 w-full h-full grid place-content-center rounded-lg"
                          style={{ backgroundColor: button }}
                        >
                          <IconPen className="w-5 h-5" fill="#fff" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-3"
          className="bg-white px-5 rounded-lg border border-gray-300"
        >
          <AccordionTrigger className="!no-underline">
            <figure className="p-1 border border-black rounded-md">
              <IconInformation className="w-10 h-10" />
            </figure>

            <div className="w-full ml-5">
              <Typography tag="h2" variant={TYPO_STYLES.VARIANT.BODY}>
                PDF information
              </Typography>
              <Typography
                variant={TYPO_STYLES.VARIANT.MINI}
                className="font-normal text-gray-400"
              >
                Add a some context to your PDF.
              </Typography>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="cursor-pointer border-t pt-8 grid gap-4">
              <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                <Label htmlFor="company" className="text-base text-gray-600">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="E.g. Google"
                  className="bg-white shadow-none !border-gray-300"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                <Label htmlFor="pdfTitle" className="text-base text-gray-600">
                  PDF title
                </Label>
                <Input
                  id="pdfTitle"
                  name="pdfTitle"
                  type="text"
                  placeholder="E.g. Annual Report 2021"
                  className="bg-white shadow-none !border-gray-300"
                  value={form.pdfTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                <Label
                  htmlFor="description"
                  className="text-base text-gray-600"
                >
                  Description
                </Label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  placeholder="E.g. Our annual report for 2021"
                  className="bg-white shadow-none border focus:outline-none focus:shadow-outline !border-gray-300 py-3 px-3 text-gray-900 appearance-none rounded-lg w-full"
                  value={form.description}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                <Label htmlFor="pdfTile" className="text-base text-gray-600">
                  Website
                </Label>
                <Input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="E.g. https://google.com"
                  className="bg-white shadow-none !border-gray-300"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5 bg-gray-100 border border-gray-300 p-3 rounded-md">
                <Label htmlFor="pdfTile" className="text-base text-gray-600">
                  Button
                </Label>
                <Input
                  id="button"
                  name="button"
                  type="text"
                  placeholder="E.g. click here"
                  className="bg-white shadow-none !border-gray-300"
                  value={form.button}
                  onChange={handleChange}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  )
}
