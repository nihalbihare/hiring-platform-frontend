const signUpValidation = (name :string , value :string) =>{
    switch(name){
        case "name":
            if(value.length == 0) return "Name is required"
            return "";
            case "email":
                if(value.length == 0) return "Email is required"
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) 
                    return "Invalid email format";
                return "";
                case "password":
                    if(value.length == 0) return "password is required"
                    if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,15}$/.test(value)) 
                        return "Password must be 6-15 characters long and include uppercase, lowercase, number, and special character";
                    return ""
                    default : 
                    return ''
    
                }
}
export const loginValidation = (name :string , value :string) =>{
    switch(name){

            case "email":
                if(value.length == 0) return "Email is required"
                return "";
                case "password":
                    if(value.length == 0) return "password is required"
                    return ""
                    default :
                    return ''
    
                }
}
export default signUpValidation