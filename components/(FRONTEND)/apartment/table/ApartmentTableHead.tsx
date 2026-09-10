const ApartmentTableHead = () => {
  return (
    <thead>
      <tr className="text-left bg-accent text-secondary">
        <th className="p-3">Nr</th>
        <th className="p-3">Nazwa pomieszczenia</th>
        <th className="p-3 text-center md:text-right">Pow. użytkowa [m²]</th>
      </tr>
    </thead>
  );
};

export default ApartmentTableHead;
