import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Detail from './component/detail';
import Reservation from './component/reservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
