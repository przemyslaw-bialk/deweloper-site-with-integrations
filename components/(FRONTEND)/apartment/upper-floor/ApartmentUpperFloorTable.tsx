import ApartmentTable from "../table/ApartmentTable";

const ApartmentUpperFloorTable = () => {
  const rooms = [
    {
      nr: "A1",
      name: "Komunikacja",
      area: 5.75,
    },
    {
      nr: "A2",
      name: "Pokój",
      area: 14.1,
    },
    {
      nr: "A3",
      name: "Łazienka",
      area: 7.77,
    },
    {
      nr: "A4",
      name: "Pokój",
      area: 9.33,
    },
    {
      nr: "A5",
      name: "Pokój",
      area: 6.91,
    },
  ];
  return (
    <div className="bg-background-secondary p-6 border border-muted md:flex-1/2 mt-6 ">
      <h2>Wykaz pomieszczeń - Poddasze</h2>
      <ApartmentTable rooms={rooms} />
    </div>
  );
};

export default ApartmentUpperFloorTable;
