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
