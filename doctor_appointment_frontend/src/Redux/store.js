import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './feature/appointmentSlice';

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
});

export default store;
