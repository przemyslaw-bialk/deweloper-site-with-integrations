import ContactForm from "@/components/(FRONTEND)/contact-form/ContactForm";
import ContactFormInfo from "@/components/(FRONTEND)/contact-form/ContactFormInfo";
import SectionWrapper from "@/ui/SectionWrapper";

const ContactPage = () => {
  return (
    <SectionWrapper className="flex items-start gap-12 pt-22">
      <ContactFormInfo />
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactPage;
