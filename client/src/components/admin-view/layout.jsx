import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
    return ( <div className="min-h-screen w-full flex">
        {/* Admin Sidebar */}
        <AdminSidebar/>
        <div className="flex felx-1 flex-col">
            {/* Admin Header */}
            <AdminHeader/>
            <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
            <Outlet/>
            </main>
        </div>
    </div> );
}

export default AdminLayout;