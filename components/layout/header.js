import { Button } from '../ui/button'

export function Header() {
  return (
    <header className=" p-4 border-b flex justify-between items-center leading-5">
      <div>
        <h1 className="">Icon</h1>
        <p className="text-xs">QR KOALA</p>
      </div>
      <div className="flex">
        <Button>Entrar</Button>
        <Button>Registrar</Button>
      </div>
    </header>
  )
}
