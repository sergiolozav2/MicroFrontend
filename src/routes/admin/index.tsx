import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../../modules/admin/home/HomePage";

export const Route = createFileRoute("/admin/")({
  component: Home,
});

function Home() {
  return <HomePage />;
}
