import { Spinner, Tick } from "./Icon/icons"


interface Props {
  type: "button" | "submit" | "reset" | undefined,
  text: string,
  isLoading: boolean,
  isSuccess: boolean
}

const LoadingButton = ({ type, text, isLoading, isSuccess }: Props) => {
  return (
    <button
      type={type}
      className='text-white text--sub--content w-full rounded-lg bg-[var(--dark-green-color)] shadow-inner hover:brighter--shadow--green hover:brightness-105'
      disabled={isLoading}
    >
      <span className='flex items-center justify-center px-6 py-2.5'>
        {isLoading ? (
          <Spinner />
        ) : (
          isSuccess ? (
            <Tick />
          ) : (
            text
          )
        )}
      </span>
    </button>
  )
}

export default LoadingButton;