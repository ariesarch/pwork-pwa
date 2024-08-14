// api.ts
import { LoginRequest, LoginResponse } from "@/interfaces/login.interfaces";
import { LogoutProps } from "@/interfaces/logout.interfaces";
import { axiosInstance } from "@/lib/axiosInstance";
import { clientId, clientSecretToken } from "@/lib/baseURL";

export const login = async (props: LoginRequest): Promise<LoginResponse> => {
  const data = {
    ...props,
    grant_type: "password",
    client_id: clientId,
    client_secret: clientSecretToken,
    redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
    scope: "read write follow",
  };
  const response = await axiosInstance.post<LoginResponse>(
    "/oauth/token",
    data
  );
  return response.data as LoginResponse;
};
