import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

const initialAuthState={
    isAuthentication:false
}
const adminstate={
    admin:false
}
const adminSlice=createSlice({
    name:'admin',
    initialState:adminstate,
    reducers:{
        admin(state){
            state.admin=true
            localStorage.setItem('adminLog',true)
        },
        adminLogout(state){
            state.admin=false
            localStorage.removeItem('adminLog')
        }
    }

})
const AuthSlice=createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuthentication=true
            localStorage.setItem('loggedIn',true)
        },
        logout(state){
            state.isAuthentication=false
            localStorage.removeItem('loggedIn')
        },
    }
})

const store=configureStore({
    reducer:{auth:AuthSlice.reducer,admin:adminSlice.reducer}
})
export const adminAction=adminSlice.actions
export const authActions =AuthSlice.actions
export default store