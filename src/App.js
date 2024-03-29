import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import About from './pages/about/About';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from './pages/services/Services';
import Card from './components/card/Card1';
import Timeline from './pages/timeline/Timeline';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Timeline/>
    </div>
  );
}

export default App;
