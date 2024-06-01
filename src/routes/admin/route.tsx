import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ApplicationSidebar } from "../../modules/core/components/ApplicationSidebar";
import { RequiredLoginWrapper } from "@/modules/core/components/RequiredLoginWrapper";

export const Route = createFileRoute("/admin")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <RequiredLoginWrapper>
      <ApplicationSidebar />
      <div className="flex">
        <div className="mr-0 transition-all md:mr-admin-navbar"></div>
        <Outlet />
      </div>
    </RequiredLoginWrapper>
  );
}
