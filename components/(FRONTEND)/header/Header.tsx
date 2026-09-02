import Navigation from "./Navigation";
import Logo from "@/ui/Logo";
import CTAHeaderButton from "./CTAHeaderButton";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Logo />
        <Navigation />
        <CTAHeaderButton />
      </div>
    </header>
  );
};

export default Header;
