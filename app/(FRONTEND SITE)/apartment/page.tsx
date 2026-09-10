import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentLayout from "@/components/(FRONTEND)/apartment/ApartmentLayout";
import SectionWrapper from "@/ui/SectionWrapper";

const ApartmentPage = () => {
  return (
    <SectionWrapper className="pt-26">
      <div className="flex items-start justify-between md:flex-row flex-col">
        <ApartmentDescription />
        <ApartmentLayout />
      </div>
    </SectionWrapper>
  );
};

export default ApartmentPage;
