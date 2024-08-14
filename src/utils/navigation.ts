import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const to = (path: string) => {
    router.push(path);
  };

  return { to };
};
