import dbConnect from "@/lib/mongodb";
import Apartment, { IApartment } from "@/models/apartment.model";

export async function createApartment({
  investment,
  streetName,
  apartmentNumber,
  area,
  numberOfRooms,
  priceOfApartment,
  pricePerMeterSquare,
  status,
}: IApartment) {
  await dbConnect();

  const apartment = await Apartment.create({
    investment,
    streetName,
    apartmentNumber,
    area,
    numberOfRooms,
    priceOfApartment,
    pricePerMeterSquare,
    status,
  });

  const apartmentObject = apartment.toObject();

  return {
    ...apartmentObject,
    _id: apartmentObject._id.toString(),
  };
}

export async function getAllApartments() {
  await dbConnect();

  const apartments = await Apartment.find().lean();

  return apartments.map((apartment) => ({
    ...apartment,
    _id: apartment._id.toString(),
  }));
}

export async function updateApartment(id: string, data: Partial<IApartment>) {
  await dbConnect();

  const apartment = await Apartment.findByIdAndUpdate(id, data, {
    new: true,
  }).lean();

  if (!apartment) {
    throw new Error("apartment not found");
  }

  return {
    ...apartment,
    _id: apartment._id.toString(),
  };
}
