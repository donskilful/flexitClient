import "../../pages/home/home.scss";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import SidebarRight from "../../components/sidebarRight/SidebarRight";
import SidebarLeft from "../../components/sidebarLeft/SidebarLeft";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="body">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </div>
    </div>
  );
};

export default Home;
