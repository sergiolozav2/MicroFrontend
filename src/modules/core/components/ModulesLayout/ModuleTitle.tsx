import { MdMenu } from "react-icons/md";
import { useSidebarStore } from "../ApplicationSidebar/hooks/useSidebarStore";

type ModuleTitleProps = {
  children: React.ReactNode;
};

export function ModuleTitle(props: ModuleTitleProps) {
  const openSidebar = useSidebarStore((state) => state.open);
  function handleOpenSidebar() {
    openSidebar();
  }
  return (
    <div className="mt-2 flex px-3 text-foreground/90 md:mt-0 md:px-6">
      <div className="flex h-9 items-end p-1 md:hidden">
        <button
          className="pointer-events-auto -ml-2 rounded-md px-1 py-0.5 text-2xl hover:bg-foreground/10"
          onClick={handleOpenSidebar}
        >
          <MdMenu />
        </button>
      </div>
      <h3 className="mt-2 text-sm font-medium md:ml-0 md:mt-6">
        {props.children}
      </h3>
    </div>
  );
}
