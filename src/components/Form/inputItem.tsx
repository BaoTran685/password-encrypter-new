import { Generate_LabelObj } from "../Types/Generate/generate";
import InputBox from "./inputBox";

interface Props {
  object: Generate_LabelObj,
  value: string,
  isError: boolean,
  onChange: Function,
}

const InputItem = ({ object, value, isError, onChange }: Props) => {
  const { label, name } = object;

  return (
    <>
      <label
        htmlFor={name}
        className="text-black text-sm font-medium block mb-2"
      >
        {label}
      </label>
      <InputBox {...object} value={value} isError={isError} onChange={onChange} />
    </>
  )
}

export default InputItem;