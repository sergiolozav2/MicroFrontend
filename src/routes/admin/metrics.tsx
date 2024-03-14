import { createFileRoute } from "@tanstack/react-router";
import { MetricsPage } from "../../modules/admin/metrics/MetricsPage";

export const Route = createFileRoute("/admin/metrics")({
  component: Metrics,
});

function Metrics() {
  return <MetricsPage />;
}
