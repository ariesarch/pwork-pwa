import { logout } from "@/mutations/logout.mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      localStorage.clear();
      await router.push("/");
    },
    onError: (error) => {
      console.error("Checkout mutation failed:", error);
    },
  });
};
