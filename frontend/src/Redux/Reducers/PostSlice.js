import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: { name: "ashish" },
  reducers: {},
});

export const postReducer = PostSlice.reducer;

export const nameSelector = (state)=> state.postReducer.name;