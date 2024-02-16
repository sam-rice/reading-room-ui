import Image from "next/image"
import logo from "../public/Logo.png"

export const Header = () => {

  return (
    <header>
      <div className="h-20 bg-theme-beige-500 mt-4 flex justify-center">
        <div className="h-full w-full max-w-6xl flex justify-between items-center">
          <Image className=" h-5/6 w-auto" src={logo} alt="Reading Room logo"/>
          header test
        </div>
      </div>
    </header>
  )
}