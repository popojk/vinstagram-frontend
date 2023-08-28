import './App.css';
import Sidenav from "./components/Navigation/Sidenav";
import { Link, Outlet, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
