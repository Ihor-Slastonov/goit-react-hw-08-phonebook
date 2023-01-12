import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { register, login } from "./operations";



const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
            toast.success('Your account was successfully created')
        },
        [register.rejected](){
          toast.error("Please try again")
        },
        [login.fulfilled](state, action){
          state.user = action.payload.user
          state.token = action.payload.token
          state.isLoggedIn = true
          toast.success(`Welcome ${action.payload.user.name}`)
        }
    }
  })

  export const authReducer = authSlice.reducer;