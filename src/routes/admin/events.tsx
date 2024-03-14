import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "../../modules/admin/events/EventsPage";

export const Route = createFileRoute("/admin/events")({
  component: Events,
});

function Events() {
  return <EventsPage />;
}
