
import axiosInstance from "../Inceptor/AxiosInceptor";


 export const getNotification = async (id: any) => {
    return axiosInstance.get(`/notification/get/${id}`)
    .then(result => result.data)
    .catch(error =>{throw error})

  }
   export const readNotification = async (id: any) => {
    return axiosInstance.put(`/notification/read/${id}`)
    .then(result => result.data)
    .catch(error =>{throw error})

  }
    