'use client'
import { generatePassword } from "@/app/actions/Generate/generate-password";
import InputItem from "@/components/Form/inputItem";
import { Generate_ErrorObj, Generate_InputObj, Generate_Items } from "@/components/Types/Generate/generate";
import LoadingButton from "@/components/loadingButton";
import { cn } from "@/lib/tailwind-merge";
import { FormEvent, useState } from "react";

const NUMBER_LOWER = 8;
const NUMBER_HIGHTER = 36;

const GenerateFormSectin = ({ items }: { items: Generate_Items }) => {
  const [inputObj, setInputObj] = useState<Generate_InputObj>(items.initInputObj)
  const [errorObj, setErrorObj] = useState<Generate_ErrorObj>(items.initErrorObj)

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isMessageSuccess, setIsMessageSuccess] = useState<boolean>(false);

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    setInputObj({
      ...inputObj,
      [e.currentTarget.name]: e.currentTarget.value
    })
    setErrorObj({
      ...errorObj,
      [e.currentTarget.name]: false
    })
    setMessage('');
    setIsMessageSuccess(false);
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const ok: boolean = checkInput({ inputObj, setErrorObj, setMessage, setIsMessageSuccess });
    if (!ok) {
      setIsLoading(false);
      return;
    }
    const response = await generatePassword({ length: parseInt(inputObj.number) });
    setIsLoading(false);

    setMessage(response.message);
    setIsMessageSuccess(response.ok);
    if (response.ok) {
      setInputObj({
        ...inputObj,
        password: response.content.password
      })
    }
  }
  return (
    <form className="flex flex-col space-y-8 w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <InputItem object={items.field.number} value={inputObj.number} isError={errorObj.number} onChange={handleChange} />
        </div>
        <div className="col-span-10">
          <InputItem object={items.field.password} value={inputObj.password} isError={errorObj.password} onChange={() => { }} />
        </div>
      </div>
      <div className="flex flex-col">
        <LoadingButton type='submit' text='Generate' isLoading={isLoading} isSuccess={isMessageSuccess} />
        {Boolean(message) && (
          <div className={cn('text-sm font-semibold mt-2', {
            'text-[var(--dark-green-color)]': isMessageSuccess,
            'text-red-600': !isMessageSuccess,
          })}>{message}</div>
        )}
      </div>

    </form>
  )
}

export default GenerateFormSectin;

// checkInput checks if the number input is a number or not, if it is a number,
// then it checks if it is in the permitted range
const checkInput = ({ inputObj, setErrorObj, setMessage, setIsMessageSuccess }: { inputObj: Generate_InputObj, setErrorObj: Function, setMessage: Function, setIsMessageSuccess: Function }) => {
  const setError = (name: 'number' | 'password', message: string) => {
    setErrorObj((prev: Generate_ErrorObj) => ({
      ...prev,
      [name]: true
    }))
    setMessage(message);
    setIsMessageSuccess(false);
  }

  if (isNaN(Number(inputObj.number))) {
    setError('number', 'invalid number')
    return false;
  }
  const number = parseInt(inputObj.number);
  if (!(NUMBER_LOWER <= number && number <= NUMBER_HIGHTER)) {
    setError('number', `number must be between ${NUMBER_LOWER} and ${NUMBER_HIGHTER}`)
    return false;
  }
  return true;
}