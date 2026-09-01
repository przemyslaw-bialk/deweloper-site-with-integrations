import EditApartment from "@/components/(ADMIN)/edit-apartment/EditApartment";
import { getAllApartments } from "@/services/apartment.service";

const ApartmentsPage = async () => {
  const apartments = await getAllApartments();

  return (
    <div>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="flex items-center gap-2">
          <p>{apartment.investment},</p>

          <div className="flex items-center gap-0.5">
            <p>{apartment.streetName}</p>
            <p>{apartment.apartmentNumber}</p>
          </div>

          <EditApartment apartment={apartment} />
        </div>
      ))}
    </div>
  );
};

export default ApartmentsPage;
