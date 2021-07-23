import logo from './logo.svg';
import './App.css';
import './style.css'
import Home from "./components/Home/home"
import NavBar from "./components/navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Nav } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
