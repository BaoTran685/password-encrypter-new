import { GENERATE_ITEMS } from "@/components/Constants/Generate/generate";
import GenerateFormSectin from "@/components/Form/Generate/generateFormSection";




const GeneratePage = () => {
  return (
    <section className="my--container mx-auto mt-8">
      <GenerateFormSectin items={GENERATE_ITEMS} />
    </section>
  )
}

export default GeneratePage;

