import { createApartmentAction } from "@/actions/apratment";

const AddApartmentForm = () => {
  return (
    <form action={createApartmentAction}>
      <div className="flex flex-col gap-1">
        <label htmlFor="investment">Nazwa inwestycji</label>
        <input
          id="investment"
          name="investment"
          type="text"
          placeholder="Osiedle Zielone"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="streetName">Nazwa ulicy</label>
        <input
          id="streetName"
          name="streetName"
          type="text"
          placeholder="ul. Jeziorna"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="apartmentNumber">Numer lokalu</label>
        <input
          id="apartmentNumber"
          name="apartmentNumber"
          type="text"
          placeholder="2"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="area">Powierzchnia lokalu w m²</label>
        <input
          id="area"
          name="area"
          type="number"
          step="0.01"
          placeholder="65"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="numberOfRooms">Liczba pokoi</label>
        <input
          id="numberOfRooms"
          name="numberOfRooms"
          type="number"
          min="1"
          placeholder="3"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="priceOfApartment">Cena</label>
        <input
          id="priceOfApartment"
          name="priceOfApartment"
          type="number"
          min="0"
          step="1"
          placeholder="650000"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="pricePerMeterSquare">Cena za m²</label>
        <input
          id="pricePerMeterSquare"
          name="pricePerMeterSquare"
          type="number"
          min="0"
          step="0.01"
          placeholder="8500"
          required
          className="bg-amber-100 text-red-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="status">Status</label>

        <select
          id="status"
          name="status"
          defaultValue="available"
          required
          className="bg-amber-100 text-red-500"
        >
          <option value="available">Dostępne</option>
          <option value="reserved">Zarezerwowane</option>
          <option value="sold">Sprzedane</option>
        </select>
      </div>

      <button type="submit">Dodaj mieszkanie</button>
    </form>
  );
};

export default AddApartmentForm;
