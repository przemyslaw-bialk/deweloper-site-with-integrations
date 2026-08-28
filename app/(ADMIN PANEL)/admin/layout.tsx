import AdminSidebar from "@/components/admin/AdminSidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex p-1">
      <AdminSidebar />
      {children}
    </section>
  );
};

export default AdminLayout;
