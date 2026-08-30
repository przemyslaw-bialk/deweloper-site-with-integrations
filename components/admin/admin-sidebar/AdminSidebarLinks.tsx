import Link from "next/link";
import { MdApartment, MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const AdminSidebarLinks = () => {
  return (
    <nav className="flex-1 px-3 mt-3 ">
      <div className="space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <FaHome className="text-lg text-muted" />
          Home
        </Link>
        <Link
          href="/admin"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <MdDashboard className="text-lg text-muted" />
          Dashboard
        </Link>

        <Link
          href="/admin/apartments"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <MdApartment className="text-lg text-muted" />
          Mieszkania
        </Link>

        <Link
          href="/admin/add-apartment"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <MdApartment className="text-lg text-muted" />
          Dodaj mieszkanie
        </Link>
      </div>
    </nav>
  );
};

export default AdminSidebarLinks;
