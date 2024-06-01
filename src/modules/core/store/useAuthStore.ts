import Cookies from "js-cookie";
import { create } from "zustand";

type AuthStateType = {
  isLoggedIn: boolean;
  token: string;
};

type AuthActions = {
  setLoggedIn: (token: string) => void;
  setLoggedOut: () => void;
};
export function useToken() {
  const token = useAuthStore((s) => s.token);
  return token;
}
export const useAuthStore = create<AuthStateType & AuthActions>((set) => ({
  isLoggedIn: !!Cookies.get("isLoggedIn"),
  token: Cookies.get("token") ?? "",
  setLoggedIn: (token: string) => {
    Cookies.set("isLoggedIn", "true");
    Cookies.set("token", token);
    set(() => ({ isLoggedIn: true, token }));
  },
  setLoggedOut: () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("token");
    set(() => ({ isLoggedIn: false, token: "" }));
  },
}));
