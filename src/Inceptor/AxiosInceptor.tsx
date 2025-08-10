import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
});
axiosInstance.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        // You can add any request interceptors here
        // For example, adding an Authorization header
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            localStorage.getItem("token");

        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);
export const setupResponseInterceptor=(navigate:any)=>{
    axiosInstance.interceptors.response.use(
        (response)=>{
            return response
        },
        (error)=>{
            if(error.response?.status === 401){
            navigate("/login")
            }
            return Promise.reject(error)
        }
    )
}

export default axiosInstance;