type Props = {
  totalArea: number;
};

const ApartmentTableSummary = ({ totalArea }: Props) => {
  return (
    <tr className="bg-background-secondary">
      <td></td>
      <td className="p-3 font-semibold">Razem:</td>
      <td className="p-3 text-center md:text-right font-semibold">
        {totalArea}
      </td>
    </tr>
  );
};

export default ApartmentTableSummary;
