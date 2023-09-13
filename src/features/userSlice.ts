import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// get recommendation friend list
export const getRecommendation = createAsyncThunk('user/getRecommendation', async (_, thunkAPI): Promise<any> => {
  try {
    return await userService.getRecommendation();
  } catch (error) {
    const message = (error.response
      && error.response.data)
      || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const userSlice = createSlice({
  name: 'user',
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
    builder.addCase(getRecommendation.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getRecommendation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.data.data.recommendUsers;
      })
      .addCase(getRecommendation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.users = null;
      })
  }
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;