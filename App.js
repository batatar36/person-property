import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Person';
import {Employee} from './Property';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React App By Bahadır TATAR
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-3">
            <NavLink className="btn btn-light btn-outline-danger" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-3">
            <NavLink className="btn btn-light btn-outline-success" to="/department">
              Person
            </NavLink>
          </li>
          <li className="nav-item- m-3">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Property
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/employee" element={<Employee />} />


      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
