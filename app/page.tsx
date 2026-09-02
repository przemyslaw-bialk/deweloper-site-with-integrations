import Hero from "@/components/(FRONTEND)/hero/Hero";

export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent" />
      <Hero />
    </section>
  );
}
