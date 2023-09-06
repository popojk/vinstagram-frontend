import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import userService, { userData } from "./userService";

//Get user from local storage
const user = localStorage.getItem('user')

const initialState = {
  user: null,
  token: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Login user
export const login = createAsyncThunk('auth/login', async (user: userData, thunkAPI): Promise<any> => {
  try {
    return await userService.login(user);
  } catch (error) {
    const message = (error.response
      && error.response.data)
      || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await userService.logout();
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
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
  }
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;