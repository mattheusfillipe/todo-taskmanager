import logo from "./assets/logo.svg"

export function Header() {
  return (
    <div className="flex justify-center bg-gray-700 h-48">
      <img className="my-16 h-12" src={logo} alt="Logo todo" />
    </div>
  )
}
