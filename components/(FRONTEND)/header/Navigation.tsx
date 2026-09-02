import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href="/"
            className="text-sm text-white transition hover:text-accent-light"
          >
            Strona główna
          </Link>
        </li>

        <li>
          <Link
            href="/inwestycje"
            className="text-sm text-white transition hover:text-accent-light"
          >
            Inwestycje
          </Link>
        </li>
        <li>
          <Link
            href="/o-nas"
            className="text-sm text-white transition hover:text-accent-light"
          >
            O nas
          </Link>
        </li>
        <li>
          <Link
            href="/mieszkania"
            className="text-sm text-white transition hover:text-accent-light"
          >
            Mieszkania
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className="text-sm text-white transition hover:text-accent-light"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
