import { RoutesMap } from "./components/RoutesMap";
import { RoutesPanel } from "./components/RoutesPanel.tsx/RoutesPanel";

export function RoutesMapPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="relative flex h-full flex-1 flex-col">
        <RoutesPanel />
        <RoutesMap />
      </div>
    </div>
  );
}
