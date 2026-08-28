import dbConnect from "@/lib/mongodb";

export async function GET() {
  try {
    await dbConnect();

    return Response.json({
      success: true,
      message: "MongoDB działa!",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Błąd połączenia z MongoDB",
      },
      { status: 500 },
    );
  }
}
