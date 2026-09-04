import ButtonMain from "@/ui/ButtonMain";
import MainTittle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SubtittleAccent from "@/ui/SubtittleAccent";

const OurOffer = () => {
  return (
    <div className="px-6">
      <SubtittleAccent>mieszkania</SubtittleAccent>
      <MainTittle className="mt-2">
        Znajdź mieszkanie <br />
        dopasowane do Ciebie
      </MainTittle>
      <SectionText classname="mt-2">
        Sprawdź dostępne mieszknia w naszych inwestycjach.
      </SectionText>
      <ButtonMain href="/project">Przejdź do oferty</ButtonMain>
    </div>
  );
};

export default OurOffer;
