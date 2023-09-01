import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorForm from './components/add';
import Delete from './components/delete';
import MyAppointment from './components/myappointment';
import SideNav from './components/sidenav';
import Home from './components/home';
import Detail from './components/detail';
import Reservation from './components/reservation';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add_doctor" element={<DoctorForm />} />
          <Route path="delete" element={<Delete />} />
          <Route path="my_appointment" element={<MyAppointment />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
