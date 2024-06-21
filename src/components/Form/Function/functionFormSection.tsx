'use client'
import { Function_ErrorObj, Function_InputObj, Function_Items } from "@/components/Types/Function/function";
import { FormEvent, useState } from "react";
import InputItem from "../inputItem";
import LoadingButton from "@/components/loadingButton";
import { cn } from "@/lib/tailwind-merge";
import { EncryptDecrypt } from "@/app/actions/Fucntion/encrypt-decrypt";



const LENGTH_MINIMUM = 4;


const FunctionFormSection = ({ items }: { items: Function_Items }) => {

  const [inputObj, setInputObj] = useState<Function_InputObj>(items.initInputObj)
  const [errorObj, setErrorObj] = useState<Function_ErrorObj>(items.initErrorObj)

  const [isLoading, setIsLoading] = useState<{ encrypt: boolean, decrypt: boolean }>({ encrypt: false, decrypt: false });
  const [message, setMessage] = useState<string>('');
  const [isMessageSuccess, setIsMessageSuccess] = useState<{ encrypt: boolean, decrypt: boolean }>({ encrypt: false, decrypt: false });

  const [copied, setCopied] = useState<{ text: string, returnText: string }>({ text: '', returnText: '' });


  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    setInputObj({
      ...inputObj,
      [e.currentTarget.name]: e.currentTarget.value
    })
    setErrorObj({
      ...errorObj,
      [e.currentTarget.name]: false
    })
    setIsLoading({ encrypt: false, decrypt: false })
    setCopied({ text: '', returnText: '' });
    setMessage('');
    setIsMessageSuccess({ encrypt: false, decrypt: false });
  }

  const handleSubmit = async ({ type }: { type: 0 | 1 }) => {
    // 0 -> encrypt, 1 -> decrypt
    const ok: boolean = checkInput({ inputObj, setErrorObj, setMessage, setIsMessageSuccess });
    if (!ok) {
      return;
    }
    const response = await EncryptDecrypt({ key: inputObj.key, text: inputObj.text, type: type });

    setMessage(response.message);
    if (response.ok) {
      setInputObj({
        ...inputObj,
        returnText: response.content.returnText
      })
    } else {
      setInputObj({
        ...inputObj,
        returnText: '',
      })
    }
    setErrorObj({ ...response.errorObj, returnText: false });
    return response.ok;
  }
  const handleClickEncrypt = async () => {
    console.log('encrypt');
    setIsLoading({
      ...isLoading,
      encrypt: true,
    })
    const ok: boolean | undefined = await handleSubmit({ type: 0 })
    setIsLoading({
      ...isLoading,
      encrypt: false,
    })
    if (ok) {
      setIsMessageSuccess({
        ...isMessageSuccess,
        encrypt: ok
      })
    }
  }
  const handleClickDecrypt = async () => {
    console.log('decrypt');
    setIsLoading({
      ...isLoading,
      decrypt: true,
    })
    const ok: boolean | undefined = await handleSubmit({ type: 1 })
    setIsLoading({
      ...isLoading,
      decrypt: false,
    })
    if (ok) {
      setIsMessageSuccess({
        ...isMessageSuccess,
        decrypt: ok
      })
    }
  }

  const handleTextCopied = (str: string) => {
    setCopied({
      ...copied,
      text: str,
    })
  }
  const handleReturnTextCopied = (str: string) => {
    setCopied({
      ...copied,
      returnText: str,
    })
  }
  return (
    <form className="felx flex-col space-y-8 w-full">
      <div>
        <InputItem object={items.field.key} value={inputObj.key} isError={errorObj.key} onChange={handleChange} />
      </div>
      <div>
        <InputItem object={items.field.text} value={inputObj.text} isError={errorObj.text} onChange={handleChange} setCopied={handleTextCopied} />
        {Boolean(copied.text) && (
          <div className="text-sm font-medium text-[var(--dark-green-color)] flex justify-end mt-2">copied</div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-2">
          <LoadingButton type='button' text='Encrypt' isLoading={isLoading.encrypt} isSuccess={isMessageSuccess.encrypt} className="bg-[var(--dark-blue-color)]" onClick={handleClickEncrypt} />
          <LoadingButton type='button' text='Decrypt' isLoading={isLoading.decrypt} isSuccess={isMessageSuccess.decrypt} className="bg-[var(--dark-red-color)]" onClick={handleClickDecrypt} />
        </div>
        {Boolean(message) && (
          <div className={cn('text-sm font-semibold mt-2', {
            'text-[var(--dark-green-color)]': isMessageSuccess.encrypt || isMessageSuccess.decrypt,
            'text-red-600': !(isMessageSuccess.encrypt || isMessageSuccess.decrypt),
          })}>{message}</div>
        )}
      </div>
      <div>
        <InputItem object={items.field.returnText} value={inputObj.returnText} isError={errorObj.returnText} onChange={() => { }} setCopied={handleReturnTextCopied} />
        {Boolean(copied.returnText) && (
          <div className="text-sm font-medium text-[var(--dark-green-color)] flex justify-end mt-2">copied</div>
        )}
      </div>
    </form>
  )
}

export default FunctionFormSection;



const checkInput = ({ inputObj, setErrorObj, setMessage, setIsMessageSuccess }: { inputObj: Function_InputObj, setErrorObj: Function, setMessage: Function, setIsMessageSuccess: Function }) => {
  const setError = (name: 'key' | 'text', message: string) => {
    setErrorObj((prev: Function_ErrorObj) => ({
      ...prev,
      [name]: true,
    }))
    setMessage(message)
    setIsMessageSuccess(false);
  }
  if (inputObj.key.length < LENGTH_MINIMUM) {
    setError('key', `key must have at least ${LENGTH_MINIMUM} characters`);
    return false;
  }
  return true;
}