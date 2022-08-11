import React from "react";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase-config";
import "../Styles/Profile.css";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

import GitHubIcon from "@mui/icons-material/GitHub";

import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className="profile-page">
      <NavBar />
      {/*  <h1> This is the profile page</h1> */}
      <div className="profile">
        <img
          className="profile-pic"
          src="https://archive.org/download/profiles_202104/penguin.png"
          alt="profile_avatar"
        ></img>

        <div className="profile-details">
          <h2>{user.email}</h2>
          <button
            variant="contained"
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div>
      </div>

      <div className="dev-details">
        <h2> This is a sample project developed by Antony Jeeva</h2>

        <a
          href="https://github.com/AntonyJeeva/netflix-clone"
          rel="noreferrer"
          target={"_blank"}
        >
          <GitHubIcon className="icon" color="primary" size="large" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
