import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
    loading: false,
    appointments: [],
    error: '',
}

const fetchAppointments = createAsyncThunk('appoitnment/fetchAppointments', () =>{
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data.map((user) => user))
})

const appointmentSlice = createSlice({
    name: 'appoitment',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAppointments.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchAppointments.fulfilled, (state, action) =>{
            state.loading = false
            state.appointments = action.payload
            state.error = ''
        })
        builder.addCase(fetchAppointments.rejected, (state, action) =>{
            state.loading = false
            state.appointments = []
            state.error = action.error.message
        })
    },
})


export default appointmentSlice.reducer;
export { fetchAppointments };