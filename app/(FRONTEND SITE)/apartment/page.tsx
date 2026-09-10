import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentGroundFloorSketch from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorSketch";
import SectionWrapper from "@/ui/SectionWrapper";
import ApartmentGroundFloorTable from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorTable";

const ApartmentPage = () => {
  return (
    <SectionWrapper className="pt-26">
      <div className="flex items-start justify-between md:flex-row flex-col">
        <ApartmentDescription />
        <ApartmentGroundFloorSketch />
      </div>
      <ApartmentGroundFloorTable />
    </SectionWrapper>
  );
};

export default ApartmentPage;
