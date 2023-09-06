import './App.css';
import Sidenav from "./components/Navigation/Sidenav";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useSelector } from 'react-redux';
import Authentication from './authentication/Authentication';

function App() {
  const user = useSelector((state: any) => state.data.user.user)
  return (
      <div className="app">
        { user ? <Outlet /> : <Authentication /> }
      </div>
    
  );
}

export default App;
