import axios from "axios"

const base_url = import.meta.env.VITE_USERS_BASE_URL || "http://localhost:8080/users/";
const registerUser = async (user :any)=>{
    return axios.post(`${base_url}register`, user)
    .then(res=>res.data)
    .catch(error =>{throw error})

}
const loginUser =  async (login :any)=>{
    return axios.post(`${base_url}login`, login)
    .then(res=>res.data)
    .catch(error =>{throw error})

}
export const sendOtp = async(email : any) => {
    return axios.post(`${base_url}sendOtp/${email}`)
        .then(res => res.data)
        .catch(error => { 
            console.error("Error sending OTP:", error); 
            throw error;
        });
}
export const verifyOtp = async(email: any , otp:any)=>{
    return axios.get(`${base_url}verifyOtp/${email}/${otp}`)
    .then(res=>res.data)
    .catch(error=>{throw error})
}
 export const changePass = async(email:String , password:String)=>{
    return axios.post(`${base_url}changePass`,
        {email , password})
    .then(res=>res.data)
    .catch(error=>{throw error})
}

export default {registerUser ,loginUser}