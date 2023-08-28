import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Sidenav() {
  return (
    <div>
      <img className="sidenav__logo" src="https://i.imgur.com/jWnHAAy.png" />
      <div className="sidenav__buttons">
          <button className="sidenav__button">
            <HomeIcon />
          <span>首頁</span>
          </button>

          <button className="sidenav__button">
            <SearchIcon />
          <span>搜尋</span>
          </button>

          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>通知</span>
          </button>

          <button className="sidenav__button">
            <AddBoxOutlinedIcon />
            <span>建立</span>
          </button>

          
        </div>
        <div className="sidenav__more">
          <button className="sidenav__button">
            <MenuOutlinedIcon />
          <span>更多</span>
          </button>
        </div>
    </div>
  )
}

export default Sidenav
