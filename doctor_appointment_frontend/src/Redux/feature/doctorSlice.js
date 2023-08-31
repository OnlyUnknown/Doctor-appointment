import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  doctors: [],
  error: '',
};

const fetchDoctors = createAsyncThunk('doctor/fetchDoctors', () => axios
  .get('http://localhost:3001/doctors')
  .then((response) => response.data.map((doctor) => doctor)));

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
      state.error = '';
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.loading = false;
      state.doctors = [];
      state.error = action.error.message;
    });
  },
});

export default doctorSlice.reducer;
export { fetchDoctors };
