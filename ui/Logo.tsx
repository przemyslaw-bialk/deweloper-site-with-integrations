import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col">
      <div className="font-serif text-3xl font-semibold leading-none tracking-tight text-foreground">
        <span className="font-normal italic">Piotr</span> Cywiński
      </div>
      <div className="my-2 h-px w-full bg-white opacity-30" />
      <div className="whitespace-nowrap text-[8px] font-semibold tracking-widest">
        SPRZEDAŻ
        <span className="mx-2 opacity-50">•</span>
        DORADZTWO
        <span className="mx-2 opacity-50">•</span>
        ZARZĄDZANIE
      </div>
    </Link>
  );
};

export default Logo;
