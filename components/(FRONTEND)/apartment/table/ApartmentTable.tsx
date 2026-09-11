import ApartmentTableHead from "./ApartmentTableHead";
import ApartmentTableSummary from "./ApartmentTableSummary";

type Props = {
  rooms: {
    nr: string;
    name: string;
    area: number;
  }[];
};

const ApartmentTable = ({ rooms }: Props) => {
  const totalArea = Number(
    rooms.reduce((accumulator, room) => accumulator + room.area, 0).toFixed(2),
  );

  return (
    <div className="mt-6">
      <table className="w-full text-sm">
        <ApartmentTableHead />
        <tbody>
          {rooms.map((room) => (
            <tr key={room.nr} className=" nth-[2n]:bg-background">
              <td className="p-3">{room.nr}</td>
              <td className="p-3">{room.name}</td>
              <td className="p-3 text-center md:text-right">{room.area}</td>
            </tr>
          ))}
          <ApartmentTableSummary totalArea={totalArea} />
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentTable;
