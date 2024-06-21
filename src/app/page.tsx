import AboutSection from "@/components/About/aboutSection";
import FunctionSection from "@/components/Function/functionSection";
import GenerateSection from "@/components/Generate/generateSection";
import Bar from "@/components/bar";


const IndexPage = () => {
  return (
    <section>
      <div className="flex flex-col justify-center">
        <AboutSection />
        <Bar />
        <GenerateSection />
        <Bar />
        <FunctionSection />
        <Bar />
      </div>
    </section>
  )
}

export default IndexPage;