import Footer from './pages/Footer';
import Habilidades from './pages/Habilidades';
import Principal from './pages/Principal';
import Proyectos from './pages/Proyectos';
import Servicios from './pages/Servicios';
import SobreMi from './pages/SobreMi';
import { useThemeContext } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { theme } = useThemeContext();

  AOS.init();

  return (
    <div id={theme}>
      <Principal />
      <SobreMi />
      <Habilidades />
      <Servicios />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
