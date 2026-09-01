"use client";

import { updateApartmentAction } from "@/actions/apartment";
import { useState } from "react";
import EditApartmentButton from "./EditApartmentButton";

type Apartment = {
  _id: string;
  investment: string;
  streetName: string;
  apartmentNumber: string;
  area: number;
  numberOfRooms: number;
  priceOfApartment: number;
  pricePerMeterSquare: number;
  status: "available" | "reserved" | "sold";
};

type Props = {
  apartment: Apartment;
};

const EditApartmentForm = ({ apartment }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) {
    return <EditApartmentButton setIsEditing={setIsEditing} />;
  }

  return (
    <form
      action={async (formData) => {
        await updateApartmentAction(apartment._id, formData);
        setIsEditing(false);
      }}
      className="flex items-center gap-2"
    >
      <input
        name="investment"
        defaultValue={apartment.investment}
        className="rounded border px-2 py-1"
      />

      <input
        name="streetName"
        defaultValue={apartment.streetName}
        className="rounded border px-2 py-1"
      />

      <input
        name="apartmentNumber"
        defaultValue={apartment.apartmentNumber}
        className="rounded border px-2 py-1"
      />

      <button type="submit" className="rounded-lg border px-3 py-1 text-sm">
        Zapisz
      </button>

      <button
        type="button"
        onClick={() => setIsEditing(false)}
        className="rounded-lg border px-3 py-1 text-sm"
      >
        Anuluj
      </button>
    </form>
  );
};

export default EditApartmentForm;
