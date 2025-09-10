// src/pages/superadmin/SuperadminDashboard.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Store, LogOut } from "lucide-react";
import Overview from "./Overview";
import ManageVendor from "./ManageVendor";
import ViewAllUsers from "./ViewAllUsers";

const SuperadminDashboard = () => {
  const [active, setActive] = useState<"overview" | "vendors" | "users">("overview");

  const renderContent = () => {
    switch (active) {
      case "overview":
        return <Overview />;
      case "vendors":
        return <ManageVendor />;
      case "users":
        return <ViewAllUsers />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Superadmin</h1>
        </div>
        <nav className="flex flex-col p-4 gap-2">
          <Button
            variant={active === "overview" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActive("overview")}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={active === "vendors" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActive("vendors")}
          >
            <Store className="w-4 h-4 mr-2" />
            Manage Vendors
          </Button>
          <Button
            variant={active === "users" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActive("users")}
          >
            <Users className="w-4 h-4 mr-2" />
            View All Users
          </Button>
        </nav>
        <div className="mt-auto p-4">
          <Button variant="destructive" className="w-full justify-start">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
};

export default SuperadminDashboard;
