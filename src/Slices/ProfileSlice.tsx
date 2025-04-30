import { createSlice } from '@reduxjs/toolkit';
import { UpdateProfile } from '../Services/ProfileServices';

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {},  // Initialize with an empty object or a default profile structure
  reducers: {
    // Action to change the profile in the state
    changeProfile: (state, action) => {
      // Directly update the state without overwriting the reference
      return { ...state, ...action.payload };
    },
    // Action to set the profile in the state
    setProfile: (state, action) => {
      return { ...action.payload };  // Set profile from payload
    },
  },
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
