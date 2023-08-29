import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Add from './components/add';
import Doctors from './components/doctors';
import Delete from './components/delete';
import Myreservation from './components/myreservation';
import Reserve from './components/reserveForm';
import Home from './component/home';
import Detail from './component/detail';
import Reservation from './component/reservation';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="add_doctor" element={<Add />} />
          <Route path="delete" element={<Delete />} />
          <Route path="my_reservation" element={<Myreservation />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
