import React, { Component }  from 'react';
import logo from './logo1.svg';
import './App.css';
import Rutinas from './components/Rutinas';
import ContenedorMoti from './components/ContenedorMoti';
import Jumbo from './components/Jumbo';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo1" />
          <h1 className="App-title">DESTROYERS  WEBSITE</h1>
        </header>
        <Router>
        <div className="container mt-1">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>
          <Link to="/Rutinas" className="btn btn-dark">Rutinas</Link>
          <NavLink to="/ContenedorMoti" className="btn btn-dark" activeClassName="active">Motivación</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Jumbo/>
          </Route>
          <Route path="/Rutinas">
            <Rutinas />
          </Route>
          <Route path="/ContenedorMoti">
            <ContenedorMoti />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
    );
  }
}
export default App;

