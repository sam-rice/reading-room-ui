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
  autoComplete?: string
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
  autoComplete,
  onKeyDown,
  label,
  register,
  registerOptions,
  error,
}: InputProps<T>) {
  return (
    <label className={twMerge("w-full flex flex-col relative mb-6", className)}>
      <span>{label}: </span>
      <input
        className="rounded-theme-small border h-9 mt-1 pl-2 border-theme-gray-400"
        onKeyDown={onKeyDown && ((e) => onKeyDown(e.key))}
        placeholder={placeholder}
        type={type}
        {...register(label, registerOptions)}
        aria-invalid={!!error}
        autoComplete={autoComplete}
      />
      {error && (
        <span className="text-red-500 absolute -bottom-6">
          * {error.message}
        </span>
      )}
    </label>
  )
}

export default Input
