import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Apply from './components/Apply';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Technology />
        <FAQ />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}

export default App;
