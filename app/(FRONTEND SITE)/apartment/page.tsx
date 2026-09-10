import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentGroundFloorSketch from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorSketch";
import ApartmentRoomList from "@/components/(FRONTEND)/apartment/ApartmentRoomList";
import SectionWrapper from "@/ui/SectionWrapper";

const ApartmentPage = () => {
  return (
    <SectionWrapper className="pt-26">
      <div className="flex items-start justify-between md:flex-row flex-col">
        <ApartmentDescription />
        <ApartmentGroundFloorSketch />
      </div>
      <ApartmentRoomList />
    </SectionWrapper>
  );
};

export default ApartmentPage;
