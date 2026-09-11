import ApartmentTable from "./table/ApartmentTable";

const ApartmentGroundFloorTable = () => {
  const rooms = [
    {
      nr: "A1",
      name: "Wiatrołap",
      area: 5.53,
    },
    {
      nr: "A2",
      name: "Pokój",
      area: 8.97,
    },
    {
      nr: "A3",
      name: "Kuchnia",
      area: 5.67,
    },
    {
      nr: "A4",
      name: "Pokój dzienny",
      area: 26.27,
    },
    {
      nr: "A5",
      name: "Komunikacja",
      area: 10.46,
    },
    {
      nr: "A6",
      name: "Łazienka",
      area: 1.76,
    },
  ];

  return (
    <div className="bg-background-secondary p-6 border border-muted flex-1/2">
      <h2>Wykaz pomieszczeń - Parter</h2>
      <ApartmentTable rooms={rooms} />
    </div>
  );
};

export default ApartmentGroundFloorTable;
