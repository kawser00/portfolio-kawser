import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import Project from './Components/Project/Project';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Project></Project>
    </div>
  );
}

export default App;
