import logo from './logo.svg';
import './App.css';
import Team from './Team';
import About from './AboutUs'
import Roadmap from './Roadmap'
import Navbar from './Navbar';
import Homepage from './Homepage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <About/>
      <Roadmap/>
      <Team/> 
    </div>
  );
}

export default App;
