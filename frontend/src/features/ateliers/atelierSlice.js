import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/ateliers/";

export const fetchAteliers = createAsyncThunk(
  "ateliers/fetchAteliers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      // Handle errors and rejectWithValue
    }
  }
);

const initialState = {
  ateliers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const atelierSlice = createSlice({
  name: "ateliers",
  initialState: initialState,
  reducers: {
    reset: () => initialState, // Reset state to initial state
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAteliers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAteliers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ateliers = action.payload;
      })
      .addCase(fetchAteliers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = atelierSlice.actions;
export default atelierSlice.reducer;
