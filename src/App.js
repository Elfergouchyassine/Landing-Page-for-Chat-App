import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero id='hero' />
      <Testimonial id='features' />
      <CallToAction id='cta' />
      <Footer />
    </BrowserRouter>
  );
}

export default App;