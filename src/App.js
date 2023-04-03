import './App.css';
import Hero from "./components/hero_section/hero";
import Programs from './components/programs/programs';
import Reasons from "./components/reasons/reasons";
import Plans from './components/plans/plans';
import Test from './components/testimonials/test';
import Join from './components/join/join';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App"> 
  
    <Hero />
    <Programs/>
    <Reasons/>
    <Plans />
    <Test />
    <Join />
    <Footer />

    </div>
  );
}

export default App;
