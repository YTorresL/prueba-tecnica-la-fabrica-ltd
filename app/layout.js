import { FormProvider } from '@/context/useForm'
import './globals.css'
import 'normalize.css/normalize.css'

export const metadata = {
  title: 'Prueba técnica | fullstack',
  description:
    'Prueba técnica para fullstack, Yalith Torres para la empresa "La fabrica LTD.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid min-h-screen items-center content-between bg-gray-100">
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  )
}
