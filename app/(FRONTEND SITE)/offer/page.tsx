import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentGroundFloorSketch from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorSketch";
import SectionWrapper from "@/ui/SectionWrapper";
import ApartmentGroundFloorTable from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorTable";
import ApartmentGroundFloorDescription from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorDescription";
import ApartmentBackgroundSection from "@/components/(FRONTEND)/apartment/ApartmentBackgroundSection";
import ApartmentUpperFloorTable from "@/components/(FRONTEND)/apartment/upper-floor/ApartmentUpperFloorTable";
import ApartmentUpperFloorSketch from "@/components/(FRONTEND)/apartment/upper-floor/ApartmentUpperFloorSketch";

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
      <SectionWrapper>
        <div className="flex md:items-start md:flex-row flex-col pt-12 gap-14">
          <ApartmentUpperFloorTable />
          <ApartmentUpperFloorSketch />
        </div>
      </SectionWrapper>
    </>
  );
};

export default ApartmentPage;
