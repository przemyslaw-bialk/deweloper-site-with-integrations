import Link from "next/link";

const AdminSidebar = () => {
  return (
    <div>
      <h2>admin sidebar</h2>
      <Link href="/admin/add-apartment">Dodaj apartament</Link>
    </div>
  );
};

export default AdminSidebar;
