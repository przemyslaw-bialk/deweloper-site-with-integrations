import Image from "next/image";
import ButtonMain from "@/ui/ButtonMain";
import MainTitle from "@/ui/MainTittle";

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
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-5 md:flex-row">
        <div>
          <MainTitle className="px-6">
            Porozmawiajmy o Twoim nowym mieszkaniu
          </MainTitle>

          <p className="mt-2 px-6 text-sm tracking-wide">
            Skontaktuj się z nami i dowiedz się więcej o aktualnej ofercie.
          </p>
        </div>
        <ButtonMain href="/contact" className="md:mr-6">
          Skontaktuj się
        </ButtonMain>
      </div>
    </div>
  );
};

export default ContactSection;
