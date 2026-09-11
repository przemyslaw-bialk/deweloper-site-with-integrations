import Image from "next/image";
import ButtonMain from "@/ui/ButtonMain";
import MainTitle from "@/ui/MainTittle";
import SectionWrapper from "@/ui/SectionWrapper";

const ContactSection = () => {
  return (
    <div className="relative">
      <Image
        src="/hero.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />
      <SectionWrapper className="relative py-10 flex flex-col md:flex-row justify-between">
        <div>
          <MainTitle>Porozmawiajmy o Twoim nowym mieszkaniu</MainTitle>
          <p className="mt-2 text-sm tracking-wide">
            Skontaktuj się z nami i dowiedz się więcej o aktualnej ofercie.
          </p>
        </div>

        <ButtonMain href="/contact" className="mt-6 w-fit">
          Skontaktuj się
        </ButtonMain>
      </SectionWrapper>
    </div>
  );
};

export default ContactSection;
