import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/machines/";

export const fetchMachines = createAsyncThunk(
  "machines/fetchMachines",
  async (atelier, thunkAPI) => {
    try {
      const response = await axios.get(API_URL, {
        params: { atelier },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Add the selectMachines selector here
export const selectMachines = (state) => state.machines.machines;

const initialState = {
  machines: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const machineSlice = createSlice({
  name: "machines",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMachines.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMachines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.machines = action.payload;
      })
      .addCase(fetchMachines.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = machineSlice.actions;
export default machineSlice.reducer;
