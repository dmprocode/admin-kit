import "./widget.scss";
// material ui icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReorderIcon from "@mui/icons-material/Reorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BalanceIcon from "@mui/icons-material/Balance";
const Widget = ({ type }) => {
  let data;
  // temporary
  const amount = 1000;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all user",
        isMoney: false,
        icon: <PersonOutlineIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "See all order",
        icon: <ReorderIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        link: "View net Earning",
        isMoney: true,
        icon: <AttachMoneyIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        link: "View net Balance",
        isMoney: true,
        icon: <BalanceIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <ArrowUpwardIcon className="icon" />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;
