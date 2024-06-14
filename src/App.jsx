import './App.css';
import Hero from './components/Hero';
// import Main from './components/Main';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights'
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Highlights/>
     <Testimonials/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
