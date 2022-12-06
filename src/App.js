import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import About from './pages/about/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
     <Route>
      <Header/>
      </Route>
      <Route>
      <About/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
