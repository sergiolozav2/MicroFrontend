import { createLazyFileRoute } from "@tanstack/react-router";
import { LoginPage } from "../modules/auth/LoginPage";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return <LoginPage />;
}
