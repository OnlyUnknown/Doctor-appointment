import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorForm from './components/add';
import Delete from './components/delete';
import MyAppointment from './components/myappointment';
import SideNav from './components/sidenav';
import Home from './components/home';
import Detail from './components/detail';
import Reservation from './components/reservation';
import Register from './components/Register';
import SignIn from './components/SignIn';
import RegisterPage from './components/RegistrationPage';
import { UserProvider } from './components/UserContext';
import Logout from './components/logout';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <BrowserRouter>
          <div className="grid-container">
            <SideNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration_page" element={<RegisterPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="add_doctor" element={<DoctorForm />} />
              <Route path="delete" element={<Delete />} />
              <Route path="my_appointment" element={<MyAppointment />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/reservation/:id" element={<Reservation />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/sign_in" element={<SignIn />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
