import { Spinner, Tick } from "./Icon/icons"


interface Props {
  type: "button" | "submit" | "reset" | undefined,
  text: string,
  isLoading: boolean,
  isSuccess: boolean,
  className: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const LoadingButton = ({ type, text, isLoading, isSuccess, className, onClick = () => { } }: Props) => {
  return (
    <button
      type={type}
      className={`text-white text--sub--content w-full rounded-lg shadow-inner ${className} hover:brightness-110`}
      onClick={onClick}
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