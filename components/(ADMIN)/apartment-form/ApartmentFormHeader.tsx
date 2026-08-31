const ApartmentFormHeader = () => {
  return (
    <div className="mb-8 border-b border-border pb-6">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
        Panel administracyjny
      </p>

      <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Dodaj mieszkanie
      </h1>

      <p className="mt-2 text-sm text-muted">
        Uzupełnij dane lokalu, aby dodać go do oferty inwestycji.
      </p>
    </div>
  );
};

export default ApartmentFormHeader;
