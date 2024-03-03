import { HTMLInputTypeAttribute } from "react"
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface InputProps<T extends FieldValues> {
  className?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onKeyDown?: (key: string) => void
  label: Path<T>
  register: UseFormRegister<T>
  registerOptions?: RegisterOptions<T, Path<T>>
  error?: FieldError
}

function Input<T extends FieldValues>({
  className,
  type = "text",
  placeholder,
  onKeyDown,
  label,
  register,
  registerOptions,
  error,
}: InputProps<T>) {
  return (
    <label className={twMerge("w-full flex flex-col", className)}>
      <span>{label}: </span>
      <input
        className="rounded-theme-small border h-9 mt-1 pl-2 border-theme-gray-400"
        onKeyDown={onKeyDown && ((e) => onKeyDown(e.key))}
        placeholder={placeholder}
        type={type}
        {...register(label, registerOptions)}
        aria-invalid={!!error}
      />
      {error && <span className="text-red-500">* {error.message}</span>}
    </label>
  )
}

export default Input
