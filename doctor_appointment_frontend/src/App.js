import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Detail from "./components/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
