import { useState } from "react";

export const Marketplace = ({ fill2, solid2, line2 }) => {
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
        style={line2 ? MID_ICON : MID_ACTIVE_ICON}
        onMouseEnter={() => setBg(true)}
        onMouseLeave={() => setBg(false)}
        className={line2 ? "home-icon" : null}
      >
        <svg
          viewBox="0 0 28 28"
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6"
          fill={fill2}
          height="3em"
          width="3em"
          fontSize="10px"
          style={MID_SVG}
        >
          <path d={solid2} />
        </svg>
      </div>
      <span className={hover ? "linkm-tag" : "nonactive-link-tag"}>
        Marketplace
      </span>
    </div>
  );
};
