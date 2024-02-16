import { dmSerifDisplay } from "./layout"
import { twMerge } from "tailwind-merge"

export default function Home() {
  return (
    // min-h-screen on <main>
    <main className="flex w-full min-h-screen flex-col items-center justify-around">
      <div className="flex w-full flex-col items-center ">
        <h1 className={twMerge(dmSerifDisplay.className, "text-5xl")}>
          READING ROOM
        </h1>
        <div className="bg-theme-beige-400 w-full h-96 rounded-theme-large">test in here</div>
      </div>
    </main>
  )
}
