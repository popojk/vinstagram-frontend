import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">
        為你推薦
      </div>

      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">calexwu</span>
              <span className="relation">新用戶</span>
            </div>
          </div>
          <button className="follow__button">追蹤</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">calexwu</span>
              <span className="relation">新用戶</span>
            </div>
          </div>
          <button className="follow__button">追蹤</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">calexwu</span>
              <span className="relation">新用戶</span>
            </div>
          </div>
          <button className="follow__button">追蹤</button>
        </div>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">calexwu</span>
              <span className="relation">新用戶</span>
            </div>
          </div>
          <button className="follow__button">追蹤</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
