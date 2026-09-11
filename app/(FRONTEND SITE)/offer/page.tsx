import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentGroundFloorSketch from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorSketch";
import SectionWrapper from "@/ui/SectionWrapper";
import ApartmentGroundFloorTable from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorTable";
import ApartmentGroundFloorDescription from "@/components/(FRONTEND)/apartment/ApartmentGroundFloorDescription";
import ApartmentBackgroundSection from "@/components/(FRONTEND)/apartment/ApartmentBackgroundSection";

const ApartmentPage = () => {
  return (
    <>
      <SectionWrapper className="pt-26">
        <div className="flex items-start justify-between md:flex-row flex-col">
          <ApartmentDescription />
          <ApartmentGroundFloorSketch />
        </div>
      </SectionWrapper>
      <SectionWrapper
        className="py-12"
        backgroundColor="bg-background-secondary"
      >
        <div className="flex flex-col gap-14 md:flex-row ">
          <ApartmentGroundFloorTable />
          <ApartmentGroundFloorDescription />
        </div>
      </SectionWrapper>
      <ApartmentBackgroundSection />
    </>
  );
};

export default ApartmentPage;
