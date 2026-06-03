import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { Depoimentos } from './pages/Depoimentos';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;