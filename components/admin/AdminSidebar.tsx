import Link from "next/link";
import {
  MdDashboard,
  MdApartment,
  MdMessage,
  MdSettings,
} from "react-icons/md";

const AdminSidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
      <div className="border-b border-border px-6 py-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Panel
        </p>

        <h2 className="mt-1 text-xl font-semibold text-foreground">
          Deweloper
        </h2>
      </div>

      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted">
          Menu
        </p>

        <div className="space-y-1">
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

          <Link
            href="/admin/messages"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            <MdMessage className="text-lg text-muted" />
            Wiadomości
          </Link>
        </div>

        <p className="mb-3 mt-8 px-3 text-xs font-medium uppercase tracking-wider text-muted">
          System
        </p>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <MdSettings className="text-lg text-muted" />
          Ustawienia
        </Link>
      </nav>

      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-secondary px-3 py-3">
          <p className="text-xs text-muted">Panel administracyjny</p>
          <p className="mt-1 text-sm font-medium text-foreground">
            Zarządzanie ofertą
          </p>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
