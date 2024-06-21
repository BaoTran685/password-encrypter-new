import { FUNCTION_ITEMS } from "../Constants/Function/function";
import FunctionFormSection from "../Form/Function/functionFormSection";
import Header from "../header";




const FunctionSection = () => {
  return (
    <section className="my-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Header text={'Encrypter/Decrypter'} className="text-[var(--text-less-black-color)]" />
        <FunctionFormSection items={FUNCTION_ITEMS} />
      </div>
    </section>
  )
}

export default FunctionSection;