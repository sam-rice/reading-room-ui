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
  id: string
  className?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
  onKeyDown?: (key: string) => void
  label: Path<T>
  register: UseFormRegister<T>
  registerOptions?: RegisterOptions<T, Path<T>>
  error?: FieldError
  required?: boolean
}

function Input<T extends FieldValues>({
  id,
  className,
  type = "text",
  placeholder,
  autoComplete,
  onKeyDown,
  label,
  register,
  registerOptions,
  error,
  required,
}: InputProps<T>) {
  return (
    <label className={twMerge("relative mb-6 flex w-full flex-col", className)}>
      <span>{label}: </span>
      <input
        id={id}
        className="mt-1 h-9 rounded-theme-small border border-theme-gray-400 pl-2"
        onKeyDown={onKeyDown && ((e) => onKeyDown(e.key))}
        placeholder={placeholder}
        type={type}
        {...register(label, registerOptions)}
        aria-invalid={!!error}
        aria-errormessage={`${id}-error`}
        autoComplete={autoComplete}
        required={required}
      />
      {error && (
        <span id={`${id}-error`} className="absolute -bottom-6 text-red-500">
          * {error.message}
        </span>
      )}
    </label>
  )
}

export default Input
