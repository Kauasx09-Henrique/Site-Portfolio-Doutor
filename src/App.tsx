import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { Depoimentos } from './pages/Depoimentos';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;