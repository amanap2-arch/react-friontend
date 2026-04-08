import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: ["Aman","Rahul"]

}

const userSlice = createSlice({
    name:"USER",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.user.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer;