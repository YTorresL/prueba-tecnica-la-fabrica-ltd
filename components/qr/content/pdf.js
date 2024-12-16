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
    background: '#000000',
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
              <h2 className="text-lg font-semibold">Design</h2>
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
                  <div className="relative w-full sm:w-fit grid place-content-center">
                    <div className="px-5 sm:px-0 bg-gray-100 z-[1]">
                      <div
                        className="h-[50.33px] w-[50.33px] sm:mt-7 bg-primary rounded-full grid place-content-center"
                        role="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1200 1200"
                          width="30"
                          height="30"
                          fill="#FFFFFF"
                          className="transition-all rotate-90 sm:rotate-0"
                        >
                          <path d="M439.5 431.45h382.82L718.48 535.27c-10.547 10.535-10.547 27.637 0 38.184 5.27 5.27 12.18 7.906 19.094 7.906 6.91 0 13.812-2.64 19.094-7.906l149.91-149.9a27.471 27.471 0 0 0 3.348-4.078c.254-.395.433-.828.672-1.235.671-1.105 1.32-2.207 1.812-3.406.238-.539.336-1.14.54-1.703.37-1.105.769-2.183 1.007-3.336.348-1.738.539-3.527.539-5.34s-.191-3.601-.54-5.34c-.237-1.163-.636-2.242-1.007-3.335-.203-.563-.3-1.153-.539-1.703-.492-1.2-1.152-2.305-1.812-3.407-.239-.406-.407-.84-.672-1.234a26.807 26.807 0 0 0-3.348-4.078l-149.89-149.91c-10.547-10.547-27.637-10.547-38.184 0-10.547 10.535-10.547 27.637 0 38.184l103.81 103.81h-382.82c-118.01 0-214.01 96-214.01 214.01 0 14.914 12.098 27 27 27s27-12.086 27-27c0-88.227 71.773-160.01 160.01-160.01zm508.01 150.09c-14.902 0-27 12.086-27 27 0 88.234-71.773 160.01-160.01 160.01H377.68l103.84-103.82c10.547-10.535 10.547-27.637 0-38.184s-27.637-10.547-38.184 0l-149.92 149.91a26.814 26.814 0 0 0-3.348 4.094c-.254.37-.406.781-.636 1.176-.684 1.117-1.344 2.242-1.848 3.468-.227.528-.324 1.118-.516 1.668-.383 1.106-.793 2.207-1.03 3.372-.349 1.753-.54 3.527-.54 5.34s.191 3.59.54 5.34c.237 1.163.648 2.269 1.03 3.37.192.551.29 1.13.516 1.668.504 1.223 1.176 2.34 1.848 3.469.226.383.382.805.636 1.176a27.726 27.726 0 0 0 3.348 4.094l149.89 149.89c5.27 5.27 12.18 7.906 19.094 7.906 6.91 0 13.812-2.64 19.094-7.906 10.547-10.535 10.547-27.637 0-38.184l-103.81-103.81h382.82c118.01 0 214.01-96 214.01-214.01 0-14.941-12.098-27.027-27-27.027z"></path>
                        </svg>
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
              <h2 className="text-lg font-semibold">PDF information</h2>
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
                <Label htmlFor="pdfTile" className="text-base text-gray-600">
                  PDF title
                </Label>
                <Input
                  id="pdfTile"
                  name="pdfTile"
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
                  Website
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
