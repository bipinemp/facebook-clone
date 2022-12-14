import "./css/navbar.css";
import { BsSearch } from "react-icons/bs";
import { Facebook } from "../icons/Facebook";
import { Home } from "../icons/Home";
import { Watch } from "../icons/Watch";
import { Marketplace } from "../icons/Marketplace";
import { Gaming } from "../icons/Gaming";
import { Menu } from "../icons/Menu";
import { Messenger } from "../icons/Messenger";
import { Notifications } from "../icons/Notifications";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const email = localStorage.getItem("email");
  const pic = localStorage.getItem("pic");

  const [solid, setSolid] = useState("");
  const [solid1, setSolid1] = useState("");
  const [solid2, setSolid2] = useState("");
  const [solid3, setSolid3] = useState("");

  const [fill, setFill] = useState("");
  const [fill1, setFill1] = useState("");
  const [fill2, setFill2] = useState("");
  const [fill3, setFill3] = useState("");

  const [line, setLine] = useState(false);
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);

  const [imgHover, setImgHover] = useState(false);

  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
    setImgHover(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.removeItem("pic");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts/all", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => null);
  }, [token]);

  return (
    <nav className="navbar">
      <div className="search-div">
        <div>
          <Facebook />
        </div>
        <div className="search-input">
          <BsSearch className="search-icon" fontSize="14px" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="nav-middle">
        <NavLink
          to="/"
          style={({ isActive }) => {
            isActive
              ? setSolid(
                  "M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"
                ) ||
                setFill("var(--blue)") ||
                setLine(true)
              : setSolid(
                  "M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"
                ) ||
                setFill("var(--icon)") ||
                setLine(false);
          }}
        >
          <Home solid={solid} fill={fill} line={line} />
        </NavLink>
        <NavLink
          className="post-len"
          to="posts"
          style={({ isActive }) => {
            isActive
              ? setSolid1(
                  "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"
                ) ||
                setFill1("var(--blue)") ||
                setLine1(true)
              : setSolid1(
                  "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"
                ) ||
                setFill1("var(--icon)") ||
                setLine1(false);
          }}
        >
          <Watch solid1={solid1} fill1={fill1} line1={line1} />
          <span className="post-length">{posts.length}</span>
        </NavLink>
        <NavLink
          to="market"
          style={({ isActive }) => {
            isActive
              ? setSolid2(
                  "m10.995,23.625l0,-5.8c0,-0.526 0.424,-0.95 0.95,-0.95l4.09,0c0.526,0 0.95,0.424 0.95,0.95l0,5.8l4.98,0c0.43,0 0.78,-0.348 0.78,-0.78l0,-8.264c-0.124,-0.073 -0.242,-0.159 -0.35,-0.256l-0.41,-0.37c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.17,0.15c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.23,0c-0.71,0 -1.41,-0.26 -1.96,-0.75l-0.19,-0.17c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.19,0.17c-0.55,0.49 -1.25,0.76 -1.96,0.76l-0.14,0c-0.71,0 -1.4,-0.26 -1.94,-0.74l-0.22,-0.19c-0.19,-0.17 -0.45,-0.17 -0.64,0l-0.18,0.16c-0.55,0.49 -1.25,0.76 -1.97,0.76l-0.18,0c-0.72,0 -1.41,-0.26 -1.96,-0.75l-0.2,-0.17c-0.18,-0.17 -0.44,-0.17 -0.63,0l-0.48,0.43c-0.076,0.067 -0.156,0.129 -0.24,0.183l0,8.287c0,0.43 0.348,0.78 0.78,0.78l4.96,0zm13.25,-8.795l0,8.015c0,1.262 -1.023,2.28 -2.28,2.28l-15.93,0c-1.262,0 -2.28,-1.023 -2.28,-2.28l0,-7.989c-0.993,-0.139 -1.76,-1.038 -1.76,-2.131l0,-2.35c0,-0.28 0.22,-0.5 0.5,-0.5l23.01,0c0.28,0 0.5,0.22 0.5,0.5l0,2.18c0,1.124 -0.756,2.063 -1.76,2.275zm0.71,-5.955l-21.93,0c-0.35,0 -0.59,-0.36 -0.46,-0.69l1.82,-4.49c0.19,-0.49 0.65,-0.82 1.17,-0.82l16.87,0c0.52,0 0.98,0.33 1.17,0.83l1.82,4.48c0.14,0.33 -0.11,0.69 -0.46,0.69z"
                ) ||
                setFill2("var(--blue)") ||
                setLine2(true)
              : setSolid2(
                  "M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"
                ) ||
                setFill2("var(--icon)") ||
                setLine2(false);
          }}
        >
          <Marketplace solid2={solid2} fill2={fill2} line2={line2} />
        </NavLink>
        <NavLink
          to="games"
          style={({ isActive }) => {
            isActive
              ? setSolid3(
                  "M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z"
                ) ||
                setFill3("var(--blue)") ||
                setLine3(true)
              : setSolid3(
                  "M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"
                ) ||
                setFill3("var(--icon)") ||
                setLine3(false);
          }}
        >
          <Gaming fill3={fill3} solid3={solid3} line3={line3} />
        </NavLink>
      </div>
      <div className="nav-last">
        <Menu />
        <Messenger />
        <Notifications />
        <div
          onClick={handleProfile}
          onMouseOver={() => setImgHover(true)}
          onMouseOut={() => setImgHover(false)}
          style={{ cursor: "pointer" }}
        >
          <img
            style={{ width: "35px", display: "block" }}
            src={`http://localhost:4000/uploads/auth/${pic}`}
            alt="profile"
          />
          <span className={imgHover ? "link-menu-tag" : "nonactive-link-tag"}>
            Account
          </span>
        </div>
      </div>
      {profile ? (
        <div className="account-profile">
          <div className="profile-name">
            <img
              style={{ width: "35px", display: "block" }}
              src={`http://localhost:4000/uploads/auth/${pic}`}
              alt="profile"
            />
            <p style={{ display: "flex", flexDirection: "column" }}>
              <span>
                <b>
                  {fname} {lname}
                </b>
              </span>
              <span style={{ fontSize: "0.7em" }}>{email}</span>
            </p>
          </div>
          <div onClick={handleLogout}>
            <span className="logout"></span>
            <p>Logout</p>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
