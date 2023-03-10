// scss link
import "./navbar.scss";
//  material ui icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import img from "./img/dm.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...!" />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img className="userImg" src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
