import AdminSidebar from "@/components/(ADMIN)/admin-sidebar/AdminSidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="min-w-0 flex-1 overflow-auto p-6 md:p-8">
        {children}
      </main>
    </section>
  );
};

export default AdminLayout;
