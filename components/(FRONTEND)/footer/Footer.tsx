import SectionWrapper from "@/ui/SectionWrapper";
import FooterLogo from "./FooterLogo";
import FooterContactInfo from "./FooterContactInfo";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return (
    <SectionWrapper className="py-4" backgroundColor="bg-background-secondary">
      <div className="flex items-start justify-between gap-12 ">
        <FooterLogo />
        <FooterContactInfo />
        <FooterNavigation />
        <FooterNavigation />
      </div>
    </SectionWrapper>
  );
};

export default Footer;
