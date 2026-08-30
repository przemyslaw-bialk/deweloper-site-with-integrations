import { createApartmentAction } from "@/actions/apratment";

const AddApartmentForm = () => {
  return (
    <form
      action={createApartmentAction}
      className="mx-auto w-full max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      {/* Header */}
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

      {/* Form */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
        {/* Investment */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="investment"
            className="text-sm font-medium text-foreground"
          >
            Nazwa inwestycji
          </label>

          <input
            id="investment"
            name="investment"
            type="text"
            placeholder="Osiedle Zielone"
            required
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Street */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="streetName"
            className="text-sm font-medium text-foreground"
          >
            Ulica
          </label>

          <input
            id="streetName"
            name="streetName"
            type="text"
            placeholder="ul. Jeziorna"
            required
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Apartment number */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="apartmentNumber"
            className="text-sm font-medium text-foreground"
          >
            Numer lokalu
          </label>

          <input
            id="apartmentNumber"
            name="apartmentNumber"
            type="text"
            placeholder="2"
            required
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Area */}
        <div className="flex flex-col gap-2">
          <label htmlFor="area" className="text-sm font-medium text-foreground">
            Powierzchnia
          </label>

          <div className="relative">
            <input
              id="area"
              name="area"
              type="number"
              min="0"
              step="0.01"
              placeholder="65"
              required
              className="h-11 w-full rounded-lg border border-border bg-background px-3 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted">
              m²
            </span>
          </div>
        </div>

        {/* Rooms */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="numberOfRooms"
            className="text-sm font-medium text-foreground"
          >
            Liczba pokoi
          </label>

          <input
            id="numberOfRooms"
            name="numberOfRooms"
            type="number"
            min="1"
            placeholder="3"
            required
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="priceOfApartment"
            className="text-sm font-medium text-foreground"
          >
            Cena mieszkania
          </label>

          <div className="relative">
            <input
              id="priceOfApartment"
              name="priceOfApartment"
              type="number"
              min="0"
              step="1"
              placeholder="650000"
              required
              className="h-11 w-full rounded-lg border border-border bg-background px-3 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted">
              zł
            </span>
          </div>
        </div>

        {/* Price per meter */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pricePerMeterSquare"
            className="text-sm font-medium text-foreground"
          >
            Cena za m²
          </label>

          <div className="relative">
            <input
              id="pricePerMeterSquare"
              name="pricePerMeterSquare"
              type="number"
              min="0"
              step="0.01"
              placeholder="8500"
              required
              className="h-11 w-full rounded-lg border border-border bg-background px-3 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted">
              zł
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="status"
            className="text-sm font-medium text-foreground"
          >
            Status lokalu
          </label>

          <select
            id="status"
            name="status"
            defaultValue="available"
            required
            className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="available">Dostępne</option>
            <option value="reserved">Zarezerwowane</option>
            <option value="sold">Sprzedane</option>
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
        <button
          type="reset"
          className="h-11 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          Wyczyść
        </button>

        <button
          type="submit"
          className="h-11 rounded-lg bg-primary px-6 text-sm font-medium text-white transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          Dodaj mieszkanie
        </button>
      </div>
    </form>
  );
};

export default AddApartmentForm;
