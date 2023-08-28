import { Link, Outlet, useLocation } from 'react-router-dom';
import "./Homepage.css"
import Sidenav from '../../components/Navigation/Sidenav';


function Homepage () {
  return (
      <div className='homepage'>
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Outlet />
      </div>
    </div>
  )
}

export default Homepage
