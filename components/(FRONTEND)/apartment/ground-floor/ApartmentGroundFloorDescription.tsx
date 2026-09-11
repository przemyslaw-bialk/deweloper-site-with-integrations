import ButtonMain from "@/ui/ButtonMain";
import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SubtittleAccent from "@/ui/SubtittleAccent";
import ApartmentGroundFloorFeatures from "./ApartmentGroundFloorFeatures";

const ApartmentGroundFloorDescription = () => {
  return (
    <div className="flex-1/2 flex flex-col items-start justify-between">
      <div>
        <SubtittleAccent>mieszkanie</SubtittleAccent>
        <MainTitle>Wszystko czego potrzebujesz</MainTitle>
        <SectionText>
          Optymalnie zaprojektowana przestrzeń, która zapewnia wygodę i
          prywatność każdemu domownikowi. Funkcjonalny układ pomieszczeń pozwala
          w pełni wykorzystać dostępną przestrzeń, tworząc komfortowe miejsce
          zarówno do codziennego życia, jak i odpoczynku. Duże przeszklenia
          zapewniają odpowiednią ilość naturalnego światła, a przemyślane
          rozmieszczenie pomieszczeń daje poczucie swobody i wygody.
        </SectionText>
        <ButtonMain href="/contact" className="mt-6">
          Zapytaj o mieszkanie
        </ButtonMain>
      </div>
      <ApartmentGroundFloorFeatures />
    </div>
  );
};

export default ApartmentGroundFloorDescription;
