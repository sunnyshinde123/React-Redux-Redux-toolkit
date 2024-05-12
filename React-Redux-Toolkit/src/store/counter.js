import { createSlice } from "@reduxjs/toolkit";



const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state, action)=>{
            return state+=1;
        },
        decrement:(state, action)=>{
            return state-=1;
        },
        addition:(state, action)=>{
            return state+=Number(action.payload);
        },
        subtraction:(state, action)=>{
            return state-=Number(action.payload);
        }
    }
})

export const counterAction=counterSlice.actions;

export default counterSlice;