import Image from "next/image";

const PhotoGrid = () => {
  const photos = [
    { src: "/photos/flat1.png", alt: "Nowoczesne mieszkanie" },
    { src: "/photos/flat2.png", alt: "Wnętrze mieszkania" },
    { src: "/photos/flat3.png", alt: "Przestrzeń mieszkalna" },
  ];
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {photos.map((photo) => (
        <div key={photo.src} className="relative aspect-4/3 overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
