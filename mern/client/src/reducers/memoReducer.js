import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";



import axios from "axios";
import { useState } from "react";

const url='http://localhost:5000/memories'
const initialState = {
    memories: [],
    currentId:-1,
}

export const addMemory = createAsyncThunk('memo/addMemory', async (memory) => { 
    console.log('reducer hit')
   
    const mem={id:nanoid(),...memory}
    console.log(mem)
    const response = await axios.post(url,mem)
    console.log(response.data)
    return response.data;
})

export const fetchMemories=createAsyncThunk('memo/fetchMemories',async()=>{
    const response = await axios.get(url)
    return response.data;
})
export const deleteMemory=createAsyncThunk('memo/deleteMemory',async(memid)=>{
    const response= await axios.delete(url,{data:{id:memid}})
    return response.data;

})
export const likeMemory=createAsyncThunk('memo/likeMemory',async(memid)=>{
    const response=await axios.put(`${url}/like`,{id:memid});
    return response.data;
})
export const updateMemory=createAsyncThunk('memo/updateMemory',async(data)=>{
    // console.log(data.id);
    // console.log(data.memory);
    const response=await axios.put(`${url}/update/${data.id}`,data.memory);
    return response.data;
})
export const setCurrentId=createAsyncThunk('memo/setCurrentId',(id)=>{
    return id; 
})


const memoSlice = createSlice(
    {
        name: 'memo',
        initialState,
      
        reducers: {
          
        },
        extraReducers(builder) {
            builder
           
            .addCase(fetchMemories.fulfilled,(state,action)=>{
                
                state.memories=action.payload;
            })
            
        }
    }
)
// export const{setCurrentId}=memoSlice.actions;
export default memoSlice.reducer;
