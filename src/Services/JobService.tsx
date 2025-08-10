import axiosInstance from "../Inceptor/AxiosInceptor";


 export const postJob = async (job:any) => {
    return axiosInstance.post(`/jobs/post` , job)
    .then(result => result.data)
    .catch(error =>{throw error})

  }
   export const getAllJobs = async () => {
    return axiosInstance.get(`/jobs/getAll`)
    .then(result => result.data)
    .catch(error =>{throw error})

  }
   export const getJob = async (id :any) => {
    return axiosInstance.get(`/jobs/get/${id}`)
    .then(result => result.data)
    .catch(error =>{throw error})
  }
  export const applyJob = async (id:any , applicants:any)=>{
    return axiosInstance.post(`/jobs/apply/${id}`,applicants)
    .then(result => result.data)
    .catch(error =>{throw error})
  }
  export const getJobPostedBy = async (id :any)=>{
    return axiosInstance.get(`/jobs/postedBy/${id}`)
    .then(result => result.data)
    .catch(error =>{throw error})
  }
  export const changeAppStatus = async (application :any) =>{
    return axiosInstance.post(`/jobs/changeAppStatus`,application)
    .then (result => result.data)
    .catch(error=>{throw error})
  }

