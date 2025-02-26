import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue:0
}

export const counterSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        handleIncrement: (state,action)=>{
            state.countValue+=1;
        }
    }
})
export const {handleIncrement} = counterSlice.actions
export default counterSlice.reducer