import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";
import ContactDeveloperInfo from "./ContactDeveloperInfo";

const ContactFormInfo = () => {
  return (
    <SectionWrapper className="pr-20">
      <SubtittleAccent>kontakt</SubtittleAccent>
      <MainTitle className="mt-2">
        Jeśli masz jakieś pytania <br /> skontaktuj się z nami.
      </MainTitle>
      <SectionText>
        Masz jakieś pytania lub szukasz idealnego mieszkania?
        <br />
        Skontaktuj się z nami - chętnie doradzimy.
      </SectionText>
      <ContactDeveloperInfo />
    </SectionWrapper>
  );
};

export default ContactFormInfo;
