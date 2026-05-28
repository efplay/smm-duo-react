import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Work from './components/Work';
import People from './components/People';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Tools />
        <Work />
        <People />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
