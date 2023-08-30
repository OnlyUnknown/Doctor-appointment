import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './components/add';
import Doctors from './components/doctors';
import Delete from './components/delete';
import MyAppointment from './components/myappointment';
import Reserve from './components/reserveForm';
import SideNav from './components/sidenav';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="add_doctor" element={<Add />} />
          <Route path="delete" element={<Delete />} />
          <Route path="my_appointment" element={<MyAppointment />} />
          <Route path="reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
