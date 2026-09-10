const ApartmentRoomList = () => {
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

  const totalArea = rooms
    .reduce((accumulator, room) => accumulator + room.area, 0)
    .toFixed(2);

  return (
    <div className="bg-background-secondary p-6 border border-muted">
      <h2>Wykaz pomieszczeń - Parter</h2>
      <div className="mt-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-accent text-secondary">
              <th className="p-3">Nr</th>
              <th className="p-3">Nazwa pomieszczenia</th>
              <th className="p-3 text-center md:text-right">
                Pow. użytkowa [m²]
              </th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room.nr} className=" nth-[2n]:bg-background">
                <td className="p-3">{room.nr}</td>

                <td className="p-3">{room.name}</td>

                <td className="p-3 text-center md:text-right">{room.area}</td>
              </tr>
            ))}
            <tr className="bg-background-secondary">
              <td></td>
              <td className="p-3 font-semibold">Razem:</td>
              <td className="p-3 text-center md:text-right font-semibold">
                {totalArea}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApartmentRoomList;
