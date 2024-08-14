import { LoginResponse } from "@/interfaces/login.interfaces";
import { login } from "@/mutations/login.mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: async (data: LoginResponse) => {
      localStorage.setItem("---nmat---", data.access_token);
      router.push("/home");
      console.log("login-data:", data);
    },
    onError: (error) => {
      console.error("Checkout mutation failed:", error);
    },
  });
};
