import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import classNames from "classnames"
import { FC } from "react"

interface PagerProps {
  currentPage: number
  numberOfPages: number
  totalItems: number
  pageForward: () => void
  pageBackward: () => void
}

const Pager: FC<PagerProps> = ({
  currentPage,
  numberOfPages,
  totalItems,
  pageForward,
  pageBackward,
}) => {
  const backwardIsDisabled = currentPage === 1
  const forwardIsDisabled = currentPage === numberOfPages

  return (
    <div className="flex flex-col items-center">
      <div className="text-theme-gray-400">{`page ${currentPage} of ${numberOfPages} (${totalItems} total results)`}</div>
      <div className="mt-1 flex w-40 justify-between">
        <button
          className={classNames({ "text-theme-gray-400": backwardIsDisabled })}
          onClick={pageBackward}
          disabled={backwardIsDisabled}
        >
          <ChevronLeft className="-mr-2 text-4xl" />
          back
        </button>
        <span className="text-3xl">{currentPage}</span>
        <button
          className={classNames({ "text-theme-gray-400": forwardIsDisabled })}
          onClick={pageForward}
          disabled={forwardIsDisabled}
        >
          next
          <ChevronRight className="-ml-2 text-4xl" />
        </button>
      </div>
    </div>
  )
}

export default Pager
