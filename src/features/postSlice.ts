import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Login user
export const getAllPosts = createAsyncThunk('post/getAllPosts', async (_, thunkAPI): Promise<any> => {
  try {
    return await postService.getAllPosts();
  } catch (error) {
    const message = (error.response
      && error.response.data)
      || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload.data.findPosts;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.posts = null;
      })
  }
})

export const { reset } = postSlice.actions;
export default postSlice.reducer;