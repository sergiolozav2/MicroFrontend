import { createLazyFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "../modules/auth/RegisterPage";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  return <RegisterPage />;
}
