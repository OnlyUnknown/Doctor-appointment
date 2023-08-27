import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation';
import Add from './components/add';
import Doctors from './components/doctors';
import Delete from './components/delete';
import Myreservation from './components/myreservation';
import Reserve from './components/reserveForm';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
