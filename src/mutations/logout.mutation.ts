import { LogoutProps } from "@/interfaces/logout.interfaces";
import { axiosInstance } from "@/lib/axiosInstance";

export const logout = async (props: LogoutProps) => {
  try {
    const response = await axiosInstance.post("api/v1/users/logout", null);

    return response.data as { message: string };
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
