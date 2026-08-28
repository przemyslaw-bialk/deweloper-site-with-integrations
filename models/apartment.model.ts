import mongoose, { Schema, Model } from "mongoose";

export interface IApartment {
  investment: string;
  apartmentNumber: string;
  area: number;
  numberOfRooms: number;
  priceOfApartment: number;
  status: "available" | "reserved" | "sold";
}

const apartmentSchema = new Schema<IApartment>(
  {
    investment: {
      type: String,
      required: true,
      trim: true,
    },

    apartmentNumber: {
      type: String,
      required: true,
      trim: true,
    },

    area: {
      type: Number,
      required: true,
    },

    numberOfRooms: {
      type: Number,
      required: true,
    },

    priceOfApartment: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "reserved", "sold"],
      default: "available",
    },
  },
  {
    timestamps: true,
  },
);

const Apartment: Model<IApartment> =
  mongoose.models.Apartment ||
  mongoose.model<IApartment>("Apartment", apartmentSchema);

export default Apartment;
