import { cn } from "@/lib/tailwind-merge";


interface Props {
  name: string,
  type: string,
  placeholder: string,
  value: string,
  isError: boolean,
  onChange: Function,
  readonly: boolean,
}

const InputBox = ({ name, type, placeholder, value, isError, onChange, readonly }: Props) => {
  return (
    <input
      name={name}
      type={type}
      className={cn('text--content text-[var(--text-black-color)] input--box border-2 p-2',
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
}

export default InputBox;