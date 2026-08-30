import AdminSidebarHeader from "./AdminSidebarHeader";
import AdminSidebarLinks from "./AdminSidebarLinks";
import AdminSidebarFooter from "./AdminSidebarFooter";

const AdminSidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
      <AdminSidebarHeader />
      <AdminSidebarLinks />
      <AdminSidebarFooter />
    </aside>
  );
};

export default AdminSidebar;
