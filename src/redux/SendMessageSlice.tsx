import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../url";
import axios from "axios";

export interface DataError{
  errorMessage:{[key:string]:string[]},
  errorTime:string,
  errorId:string
}
export interface DataData{
  data:dataProps,
  result:boolean,
  errorMessage:any

}
export interface CounterState {
  error:DataError|null,
  data:DataData|null

  
}
export interface dataProps {
 name:string,
 email:string,
 message:string
}

export const sendMessage = createAsyncThunk(
  "api/createUserInfo",
  async (data:dataProps,{rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/createUserInfo`,
        data ,
        { withCredentials: true }
      );
      return response.data;
    } catch (error: any) {
      if(error.response &&error.response.data){
        return rejectWithValue(error.response.data);
      }{
         return rejectWithValue("Bilinmeeyn bir hata oluştu")
      }
    }
  }
);

const initialState: CounterState = {
  error:null,
  data:null,
  
};

export const counterSlice = createSlice({
  name: "sendMessage",
  initialState,
  reducers: {
    clearError:(state)=>{
      state.error=null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(sendMessage.fulfilled, (state,action) => {
        state.data = action.payload;
        
        console.log(action.payload);
      })
      .addCase(sendMessage.pending, () => {
        console.log("pending");
      })
      .addCase(sendMessage.rejected, (state,action) => {
      state.error=action.payload as DataError
          console.log("Hata Detayı:", action.payload||action.error.message);
        
      });
  },
});

export const {clearError} = counterSlice.actions;

export default counterSlice.reducer;
