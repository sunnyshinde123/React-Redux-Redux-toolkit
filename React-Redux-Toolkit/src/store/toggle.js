import { createSlice } from "@reduxjs/toolkit";

const counterToggle=createSlice({
    name:"toggle",
    initialState:false,
    reducers:{
        toggle:(state, action)=> {
            return state=!state;
        }
    }
})

export const counterToggleAction=counterToggle.actions;

export default counterToggle;