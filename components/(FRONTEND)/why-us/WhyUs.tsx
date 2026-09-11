import ButtonSecondary from "@/ui/ButtonSecondary";
import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";
import Counter from "./Counter";

const WhyUs = () => {
  return (
    <SectionWrapper backgroundColor="bg-background" className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">
        <div>
          <SubtittleAccent>dlaczego my?</SubtittleAccent>

          <MainTitle>Zaufaj doświadczeniu</MainTitle>

          <SectionText>
            Od lat tworzymy miejsca, w których chce się żyć. Setki zadowolonych
            klientów i zrealizowane inwestycje to nasza najlepsza wizytówka.
          </SectionText>

          <ButtonSecondary href="/about" className="mt-10">
            O nas
          </ButtonSecondary>
        </div>
        <div className="flex gap-2 md:gap-12 items-center ">
          <Counter value={10} suffix="+">
            Lat doświadczenia
          </Counter>

          <Counter value={99} suffix="+">
            Zadowolonych klientów
          </Counter>

          <Counter value={200} suffix="+">
            Zrealizowanych mieszkań
          </Counter>

          <Counter value={100} suffix="%">
            Gwarancji jakości
          </Counter>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
