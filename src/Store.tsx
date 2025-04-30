import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice"



export default configureStore({ // creation of the store
    reducer:{ 
        user:UserReducer ,
        profile : profileReducer
}
})