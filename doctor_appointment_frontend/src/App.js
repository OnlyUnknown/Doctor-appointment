import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navigation';
import Add from './components/add';
import Delete from './components/delete';
import Home from './components/home';
import Detail from './components/detail';
import Reservation from './components/reservation';
import MyReservation from './components/my_reservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add_doctor" element={<Add />} />
          <Route path="delete" element={<Delete />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/my_reservation" element={<MyReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
