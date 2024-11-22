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
  data:DataData|null,
  loading:boolean,
  resultData:boolean

  
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
  loading:false,
  resultData:false
  
};

export const counterSlice = createSlice({
  name: "sendMessage",
  initialState,
  reducers: {
    clearError:(state)=>{
      state.error=null
    },
    setResultData:(state,action)=>{
      state.resultData=action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(sendMessage.fulfilled, (state,action) => {
        state.data = action.payload;
        state.loading = false;
        state.resultData=true
       
        
        console.log(action.payload);
      })
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.resultData=false
      console.log("pending");
      })
      .addCase(sendMessage.rejected, (state,action) => {
        state.loading = true;
        state.resultData=false
      state.error=action.payload as DataError
          console.log("Hata Detayı:", action.payload||action.error.message);
        
      });
  },
});

export const {clearError,setResultData} = counterSlice.actions;

export default counterSlice.reducer;
