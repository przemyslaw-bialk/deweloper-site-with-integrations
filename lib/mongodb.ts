import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Brak MONGODB_URI w .env.local");
}

const mongoUri: string = MONGODB_URI;

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(mongoUri);
}
