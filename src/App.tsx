import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Coverage from './components/Coverage';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Coverage />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
