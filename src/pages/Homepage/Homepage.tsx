import "./Homepage.css";
import Sidenav from "../../components/Navigation/Sidenav";
import Timeline from "../../components/Timeline/Timeline";

function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default Homepage
