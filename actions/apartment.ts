"use server";

import {
  createApartment,
  deleteApartment,
  updateApartment,
} from "@/services/apartment.service";
import { IApartment } from "@/models/apartment.model";
import { revalidatePath } from "next/cache";

export async function createApartmentAction(formData: FormData) {
  const status = formData.get("status");

  if (status !== "available" && status !== "reserved" && status !== "sold") {
    throw new Error("wrong status");
  }

  const apartment: IApartment = {
    investment: formData.get("investment") as string,
    streetName: formData.get("streetName") as string,
    apartmentNumber: formData.get("apartmentNumber") as string,
    area: Number(formData.get("area")),
    numberOfRooms: Number(formData.get("numberOfRooms")),
    priceOfApartment: Number(formData.get("priceOfApartment")),
    pricePerMeterSquare: Number(formData.get("pricePerMeterSquare")),
    status,
  };

  await createApartment(apartment);
}

export async function updateApartmentAction(id: string, formData: FormData) {
  await updateApartment(id, {
    investment: formData.get("investment") as string,
    streetName: formData.get("streetName") as string,
    apartmentNumber: formData.get("apartmentNumber") as string,
    area: Number(formData.get("area")),
    numberOfRooms: Number(formData.get("numberOfRooms")),
    priceOfApartment: Number(formData.get("priceOfApartment")),
    pricePerMeterSquare: Number(formData.get("pricePerMeterSquare")),
    status: formData.get("status") as IApartment["status"],
  });

  revalidatePath("/admin/apartments");
}

export async function deleteApartmentAction(id: string) {
  await deleteApartment(id);

  revalidatePath("/admin/apartments");
}
