import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HelpIcon from "@mui/icons-material/Help";
import "./Header.css";
import UsersLinkButton from "../NavLinks/UsersLinkButton";
import FamChatButtonHeader from "../NavLinks/FamChatButtonHeader";

export default function Header({ users, userName, token }) {
  const [user, setUser] = useState(localStorage.getItem("username"));
  console.log(user);
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate("/settings");
  };

  const logOutUser = () => {
    localStorage.removeItem("username");
    // localStorage.removeItem("password");
    setUser("");
    navigate("/");
  };

  const profile = localStorage.getItem("profileImg");
  return (
    <div>
      <div className="header">
        <div className="leftHead">
          <FamChatButtonHeader />
        </div>
        <div className="rightHead">
          <div className="imageCont">
            <Link to="#" className="imageWrap">
              <img src={profile} alt="" width="30" height="30" />
              <p>@{user}</p>
              {user && (
                <i className="fa-solid fa-earth-americas header-online-signal"></i>
              )}
            </Link>
            {/* <Link to="/settings"> */}
            <ManageAccountsIcon
              onClick={goToSettings}
              titleAccess="Account Settings"
              sx={{
                color: "#fff",
                transition: ".3s",
                borderRadius: "5px",
                padding: "5px",
                fontSize: "2em",
                "&:hover": {
                  background: "#3b3b3b",
                },
              }}
            />
            {/* </Link> */}
            {/* <UsersLinkButton /> */}
          </div>
          <div className="headerIcons">
            <Search />
            <EmailOutlinedIcon
              titleAccess="Inbox"
              sx={{
                marginRight: "10px",
                color: "#fff",
                marginTop: "3px",
                cursor: "pointer",
              }}
            />
            <HelpIcon
              titleAccess="Help"
              sx={{
                marginRight: "10px",
                color: "#fff",
                marginTop: "3px",
                cursor: "pointer",
              }}
            />
            <button className="logout" onClick={logOutUser}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
