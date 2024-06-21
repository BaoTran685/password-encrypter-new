import { cn } from "@/lib/tailwind-merge";


interface Props {
  name: string,
  type: string,
  placeholder: string,
  typeInput?: 'input' | 'textarea',
  value: string,
  isError: boolean,
  onChange: Function,
  readonly: boolean,
  className?: string,
}

const InputBox = ({ name, type, placeholder, typeInput = 'input', value, isError, onChange, readonly, className = '' }: Props) => {
  return (
    typeInput === 'input' ? (
      <input
        name={name}
        type={type}
        className={cn(`text--content text-[var(--text-black-color)] input--box border-2 p-2 ${className}`,
          {
            'border-red-600': isError === true,
          }
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        autoCorrect="off"
        spellCheck='false'
        readOnly={readonly}
      />
    ) : (
      <textarea
        name={name}
        className={cn(`text--content text-[var(--text-black-color)] min-h-20 input--box border-2 p-2 ${className}`,
          {
            'border-red-600': isError === true,
          }
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        autoComplete="off"
        autoCorrect="off"
        spellCheck='false'
        readOnly={readonly}
      />
    )
  )
}

export default InputBox;