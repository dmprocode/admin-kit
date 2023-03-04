// scss link
import "./sidebar.scss";
// materil ui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const sideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <span className="logo">dmCode</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div className="title">SERVICE</div>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashbord</span>
          </li>
          <li>
            <Person2OutlinedIcon className="icon" />
            <span>User</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <span>Product</span>
          </li>
          <li>
            <ReorderRoundedIcon className="icon" />
            <span>Order</span>
          </li>
          <li>
            <LocalShippingSharpIcon className="icon" />
            <span>Delivery</span>
          </li>
          <div className="title">USEFULL</div>
          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <PlayCircleFilledSharpIcon className="icon" />
            <span>start</span>
          </li>
          <div className="title">SERVICE</div>
          <li>
            <FitnessCenterIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Log </span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
          <div className="title">USERS</div>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Profile</span>
          </li>
        </ul>
      </div>

      <div className="buttom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
export default sideBar;
