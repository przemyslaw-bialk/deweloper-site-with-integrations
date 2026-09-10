import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SubtittleAccent from "@/ui/SubtittleAccent";
import ApartmentFeatures from "./ApartmentFeatures";

const ApartmentDescription = () => {
  return (
    <div className="md:flex-1/2 md:mt-6">
      <SubtittleAccent>Przemyślany układ</SubtittleAccent>
      <MainTitle>
        Funkcjonalne <br /> wnętrze na co dzień
      </MainTitle>
      <SectionText>
        Mieszkanie idealnie łączy komfort, nowoczesny design i praktyczny
        rozkład pomieszczeń. Przestronne wnętrza oraz własny ogród tworzą
        idealne miejsce do życia. Starannie zaplanowana przestrzeń pozwala
        wygodnie zorganizować codzienne życie, zapewniając zarówno miejsce do
        wspólnego spędzania czasu, jak i chwile odpoczynku w prywatnej części
        mieszkania.
      </SectionText>
      <ApartmentFeatures />
    </div>
  );
};

export default ApartmentDescription;
