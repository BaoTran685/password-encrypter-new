import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Generate_LabelObj } from "../Types/Generate/generate";
import InputBox from "./inputBox";

interface Props {
  object: Generate_LabelObj,
  value: string,
  isError: boolean,
  onChange: Function,
  setCopied?: Function,
}

const InputItem = ({ object, value, isError, onChange, setCopied }: Props) => {
  const { label, name } = object;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      if (setCopied) {
        setCopied(value);
      }
    } catch (e) {
      console.log('Error in GeneratePage, handleCopy', e);
    }
  }
  return (
    <>
      <label
        htmlFor={name}
        className="text-black text-sm font-medium block mb-2"
      >
        {label}
      </label>
      {name === 'password' ? (
        <div className="relative" >
          <InputBox {...object} value={value} isError={isError} onChange={onChange} />
          <div className="absolute top-0 right-2 h-full flex items-center justify-center">
            <DocumentDuplicateIcon className="size-6 hover:cursor-pointer" onClick={handleCopy} />
          </div>
        </div >
      ) : (
        <InputBox {...object} value={value} isError={isError} onChange={onChange} />
      )}
    </>
  )
}

export default InputItem;