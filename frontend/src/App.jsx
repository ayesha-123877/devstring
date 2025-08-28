import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team/>
      <Services />
      <Portfolio />
  <Choose/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

