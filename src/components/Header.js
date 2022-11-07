import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HelpIcon from "@mui/icons-material/Help";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="leftHead">
          <p className="logo">
            <span className="logo-fam">fam</span>
            <span>Chat</span>
          </p>
        </div>
        <div className="rightHead">
          <div className="imageCont">
            <Link to="#" className="imageWrap">
              <img src="/watsup-pic.jpg" alt="" width="30" height="30" />
              <p>@Kenneford</p>
            </Link>
            <Link to="/settings">
              <ManageAccountsIcon
                titleAccess="Account Settings"
                sx={{
                  color: "#24f524",
                  transition: ".3s",
                  borderRadius: "5px",
                  padding: "5px",
                  fontSize: "2em",
                  "&:hover": {
                    background: "#3b3b3b",
                  },
                }}
              />
            </Link>
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
            <Link to="/login">
              <button className="logout">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
