import { useState } from "react";
import "../common/css/navbar.css";

export const Home = ({ solid, fill, line }) => {
  const [bg, setBg] = useState(false);
  const [hover, setHover] = useState(false);

  const MID_ICON = {
    padding: "10px",
    width: "90px",
    height: "57px",
    backgroundColor: bg ? "var(--icons)" : null,
    position: "relative",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 100ms linear",
  };
  const MID_ACTIVE_ICON = {
    padding: "10px",
    width: "90px",
    height: "50px",
    backgroundColor: bg ? "var(--icons)" : null,
    position: "relative",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 100ms linear",
  };
  const MID_SVG = {
    position: "absolute",
    inset: 0,
    margin: "auto",
  };

  return (
    <div
      className="icon-cover"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        style={line ? MID_ICON : MID_ACTIVE_ICON}
        onMouseEnter={() => setBg(true)}
        onMouseLeave={() => setBg(false)}
        className={line ? "home-icon mid-icon" : "mid-active-icon"}
      >
        <svg
          viewBox="0 0 28 28"
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6"
          fill={fill}
          height="2.5em"
          width="2.5em"
          fontSize="10px"
          style={MID_SVG}
        >
          <path d={solid} />
        </svg>
      </div>
      <span className={hover ? "link-tag" : "nonactive-link-tag"}>Home</span>
    </div>
  );
};
