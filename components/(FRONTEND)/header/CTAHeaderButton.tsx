import Link from "next/link";

const CTAHeaderButton = () => {
  return (
    <Link
      href="/kontakt"
      className="bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-light"
    >
      Zapytaj o ofertę
    </Link>
  );
};

export default CTAHeaderButton;
