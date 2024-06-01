import { AuthService } from "@/backend";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

export function useRegister() {
  const navigate = useNavigate();
  const data = useMutation({
    mutationFn: AuthService.postAuthRegister,
    onSuccess: () => {
      toast.success("Se creó la cuenta exitosamente!");
      navigate({ to: "/login" });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return data;
}

export type RegisterData = First<
  Parameters<typeof AuthService.postAuthRegister>
>;
