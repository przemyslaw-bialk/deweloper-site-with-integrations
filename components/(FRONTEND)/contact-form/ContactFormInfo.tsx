import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";

const ContactFormInfo = () => {
  return (
    <SectionWrapper>
      <SubtittleAccent>kontakt</SubtittleAccent>
      <MainTitle className="mt-2">
        Jeśli masz jakieś pytania <br /> skontaktuj się z nami.
      </MainTitle>
      <SectionText>
        Masz jakieś pytania lub szukasz idealnego mieszkania?
        <br />
        Skontaktuj się z nami - chętnie doradzimy.
      </SectionText>
    </SectionWrapper>
  );
};

export default ContactFormInfo;
