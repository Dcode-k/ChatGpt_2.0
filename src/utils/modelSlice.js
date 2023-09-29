import {createSlice} from '@reduxjs/toolkit'

const modelSlice=createSlice({
    name:"model",
    initialState:{
        currentModel:"gpt-3.5-turbo-instruct",
    },
    reducers:{
        changeModel:(state,action)=>{
            state.currentModel=action.payload;
        }
    }
})

export const {changeModel} =modelSlice.actions;

export default modelSlice.reducer;