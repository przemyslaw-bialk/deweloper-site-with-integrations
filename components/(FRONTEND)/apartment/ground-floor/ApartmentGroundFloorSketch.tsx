import Image from "next/image";

const ApartmentGroundFloorSketch = () => {
  return (
    <div className="md:flex-1/2">
      <Image
        src="/photos/test.png"
        alt="Apartment layout"
        width={800}
        height={1200}
      />
    </div>
  );
};

export default ApartmentGroundFloorSketch;
