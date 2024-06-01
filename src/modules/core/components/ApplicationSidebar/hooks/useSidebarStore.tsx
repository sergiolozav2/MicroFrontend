import { create } from "zustand";

type SidebarStateType = {
  isOpen: boolean;
};

type SidebarActions = {
  open: () => void;
  close: () => void;
};

export const useSidebarStore = create<SidebarStateType & SidebarActions>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }),
);
