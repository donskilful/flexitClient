import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "../headerOption/HeaderOption"

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/netflix-1fe6a.appspot.com/o/items%2F1635072735141imgSmlogo.png?alt=media&token=bb76835f-f3cd-42ae-a70b-7241839865ee"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption
          avatar="https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
