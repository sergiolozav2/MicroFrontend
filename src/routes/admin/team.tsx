import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "../../modules/admin/team/TeamPage";

export const Route = createFileRoute("/admin/team")({
  component: Team,
});

function Team() {
  return <TeamPage />;
}
