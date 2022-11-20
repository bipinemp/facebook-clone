import { useState } from "react";

export const Gaming = ({ solid3, fill3, line3 }) => {
  const [bg, setBg] = useState(false);
  const [hover, setHover] = useState(false);

  const MID_ICON = {
    padding: "10px",
    width: "110px",
    height: "57px",
    backgroundColor: bg ? "var(--icons)" : null,
    position: "relative",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 100ms linear",
  };
  const MID_ACTIVE_ICON = {
    padding: "10px",
    width: "110px",
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
        style={line3 ? MID_ICON : MID_ACTIVE_ICON}
        onMouseEnter={() => setBg(true)}
        onMouseLeave={() => setBg(false)}
        className={line3 ? "home-icon" : null}
      >
        <svg
          viewBox="0 0 28 28"
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6"
          fill={fill3}
          height="3em"
          width="3em"
          fontSize="10px"
          style={MID_SVG}
        >
          <path d={solid3} />
        </svg>
      </div>
      <span className={hover ? "link-tag" : "nonactive-link-tag"}>Gaming</span>
    </div>
  );
};
