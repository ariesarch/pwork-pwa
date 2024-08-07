import axios, { InternalAxiosRequestConfig } from "axios";
import { backendURL, clientAccessToken, clientSecretToken } from "./baseURL";

const axiosInstance = axios.create({
	baseURL: backendURL,
});

const setAuthHeader = (config: InternalAxiosRequestConfig) => {
	const token = localStorage.getItem("pathchwork");
	if (config.headers) {
		config.headers["Authorization"] = `Bearer ${token || clientAccessToken}`;
	}

	return config;
};

axiosInstance.interceptors.request.use(setAuthHeader);

export { axiosInstance };
