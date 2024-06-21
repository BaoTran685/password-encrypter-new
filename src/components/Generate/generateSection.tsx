import { GENERATE_ITEMS } from "../Constants/Generate/generate";
import GenerateFormSection from "../Form/Generate/generateFormSection";
import Header from "../header";




const GenerateSection = () => {
  return (
    <section className="my-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Header text={'Generator'} className="text-[var(--text-less-black-color)]" />
        <GenerateFormSection items={GENERATE_ITEMS} />
      </div>
    </section>
  )
}

export default GenerateSection;