import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@mui/material";
import { AppDispatch } from "../../app/store";
import { logout } from '../../features/authSlice';
import CreatePostModal from "./CreatePostModal";
import { createPost } from "../../api/post";

function Sidenav() {
  const user = useSelector((state: any) => state.data.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(logout())
  }
  console.log(user.name)

  return (
    <div className="sidenav">
      <div className="sidenav__buttons">
        <Link to='/home/main'>
          <img className="sidenav__logo" src="https://i.imgur.com/jWnHAAy.png" />
        </Link>
        <Link to='/home/main'>
          <button className="sidenav__button">
            <HomeIcon />
            <span>首頁</span>
          </button>
        </Link>

        {/* <button className="sidenav__button">
          <SearchIcon />
          <span>搜尋</span>
        </button>

        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>通知</span>
  </button> */}

        <CreatePostModal />

        <button className="sidenav__button">
          <Avatar src={user.avatar} alt="" />
          <span>{user.username}
            <button onClick={handleLogout} className="logout__button">登出</button>
          </span>
        </button>
      </div>
      {/* <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuOutlinedIcon />
          <span>更多</span>
        </button>
</div> */}
    </div>
  )
}

export default Sidenav
