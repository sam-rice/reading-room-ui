import { Dispatch, FC, HTMLInputTypeAttribute, SetStateAction } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps {
  className?: string
  value: string
  name: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange: Dispatch<SetStateAction<string>>
  onKeyDown?: (key: string) => void
  label: string
}

export const Input: FC<InputProps> = ({
  className,
  value,
  name,
  type = "text",
  placeholder,
  onChange,
  onKeyDown,
  label,
}) => {
  return (
    <label className={twMerge("w-full flex flex-col", className)}>
      <span>{label}: </span>
      <input
        className="rounded-theme-small border h-9 mt-1 pl-2 border-theme-gray-400"
        value={value}
        name={name}
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeyDown ? e => onKeyDown(e.key) : () => undefined}
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
