import logo from './logo.svg';
import './App.css';
import Team from './Team';
import About from './AboutUs'
import Roadmap from './Roadmap'

function App() {
  return (
    <div className="App">
      <About/>
      <Roadmap/>
      <Team/> 
    </div>
  );
}

export default App;
