const FooterLogo = () => {
  return (
    <div className="flex w-fit flex-col">
      <div className="font-serif text-xl font-semibold leading-none  tracking-tight">
        <span className="font-normal italic">Piotr</span> Cywiński
      </div>

      <div className="my-1.5 h-px w-full bg-white opacity-20" />

      <div className="text-[6px] font-semibold tracking-widest text-primary">
        SPRZEDAŻ
        <span className="mx-1.5 opacity-50">•</span>
        DORADZTWO
        <span className="mx-1.5 opacity-50">•</span>
        ZARZĄDZANIE
      </div>
      <p className="text-sm tracking-wide text-muted mt-4">
        Budujemy przyszłość. Tworzymy <br />
        przestrzenie do życia.
      </p>
    </div>
  );
};

export default FooterLogo;
