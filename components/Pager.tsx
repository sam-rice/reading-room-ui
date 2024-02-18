import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FC } from "react";

interface PagerProps {

}

const Pager: FC<PagerProps> = ({}) => {
  return (
    <div className="flex flex-col items-center text-theme-gray-400">
      <div>{`page 1 of 1`}</div>
      <div className="flex justify-between w-40 mt-1">
        <button><ChevronLeft className="text-4xl mr-[-10px]" />back</button>
        <span className="text-black text-3xl">{`1`}</span>
        <button>next<ChevronRight className="text-4xl ml-[-10px]" /></button>
      </div>
    </div>
  )
}

export default Pager