import SectionWrapper from "@/ui/SectionWrapper";
import FooterLogo from "./FooterLogo";
import FooterContactInfo from "./FooterContactInfo";

const Footer = () => {
  return (
    <SectionWrapper className="py-4">
      <div className="flex items-start justify-start gap-6 mb-auto">
        <FooterLogo />
        <FooterContactInfo />
      </div>
    </SectionWrapper>
  );
};

export default Footer;
