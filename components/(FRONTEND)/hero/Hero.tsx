import CTAHeroButton from "./CTAHeroButton";
import HeroHeader from "./HeroHeader";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="absolute top-2/5 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 px-8">
      <p className="text-accent text-sm uppercase tracking-widest">
        Nowoczesne mieszkania w najlepszych lokalizacjach
      </p>
      <HeroHeader />
      <HeroText />
      <CTAHeroButton />
    </div>
  );
};

export default Hero;
