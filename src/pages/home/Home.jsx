// Scss link
import "./home.scss";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Widget from "../../components/widget/Widget";
const Home = () => {
  return (
    <div className="Home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widGets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
          <Widget type="analysis" />
        </div>
      </div>
    </div>
  );
};
export default Home;
