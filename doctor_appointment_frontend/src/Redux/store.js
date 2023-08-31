import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './feature/appointmentSlice';
import doctorReducer from './feature/doctorSlice';

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    doctor: doctorReducer,
  },
});

export default store;
