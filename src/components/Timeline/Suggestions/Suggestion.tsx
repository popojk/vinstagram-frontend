import "./Suggestions.css";
import { Avatar } from "@mui/material";
import { followUser } from "../../../api/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { getRecommendation } from "../../../features/userSlice";

type Suggestion = {
  _id: string,
  avatar: string,
  name: string
}

function Suggestion({ _id, avatar, name }: Suggestion) {

  const dispatch = useDispatch<AppDispatch>();
  const handleFollow = async (_id: string) => {
    await followUser(_id);
    dispatch(getRecommendation());
  }

  return (
    <div className="suggestions__usernames">
      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar src={avatar} />
          </span>
          <div className="username__info">
            <span className="username">{name}</span>
            <span className="relation">新用戶</span>
          </div>
        </div>
        <button
          className="follow__button"
          onClick={() => handleFollow(_id)}
        >
          追蹤
        </button>
      </div>
    </div>
  )
}

export default Suggestion

