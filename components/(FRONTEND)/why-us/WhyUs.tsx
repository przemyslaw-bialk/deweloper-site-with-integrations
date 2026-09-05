import ButtonSecondary from "@/ui/ButtonSecondary";
import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";
import Counter from "./Counter";

const WhyUs = () => {
  return (
    <SectionWrapper backgroundColor="bg-background-secondary">
      <div className="flex items-center gap-6 py-6">
        <div className="w-1/3">
          <SubtittleAccent>dlaczego my?</SubtittleAccent>

          <MainTitle>Zaufaj doświadczeniu</MainTitle>

          <SectionText>
            Od lat tworzymy miejsca, w których chce się żyć. Setki zadowolonych
            klientów i zrealizowane inwestycje to nasza najlepsza wizytówka.
          </SectionText>

          <ButtonSecondary href="/about">O nas</ButtonSecondary>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="grid grid-cols-4 gap-8">
            <Counter value={10} suffix="+">
              Lat doświadczenia
            </Counter>

            <Counter value={250} suffix="+">
              Zadowolonych klientów
            </Counter>

            <Counter value={500} suffix="+">
              Zrealizowanych mieszkań
            </Counter>

            <Counter value={100} suffix="%">
              Gwarancji jakości
            </Counter>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
