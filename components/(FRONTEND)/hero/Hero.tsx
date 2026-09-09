import Image from "next/image";
import CTAHeroButton from "./CTAHeroButton";
import HeroHeader from "./HeroHeader";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/hero.png"
        alt=""
        fill
        preload={true}
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent" />

      <div className="absolute top-2/5 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 px-8">
        <p className="text-accent text-sm uppercase tracking-widest">
          Nowoczesne mieszkania w najlepszych lokalizacjach
        </p>

        <HeroHeader />
        <HeroText />
        <CTAHeroButton />
      </div>
    </section>
  );
};

export default Hero;
