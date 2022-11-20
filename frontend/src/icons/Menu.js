import { useState } from "react";
import "../common/css/navbar.css";

export const Menu = () => {
  const [hover, setHover] = useState(false);

  return (
    <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div
        style={{
          padding: "10px",
          width: "2.3em",
          height: "2.3em",
          backgroundColor: hover ? "var(--icon-hover)" : "var(--icon-border)",
          borderRadius: "50%",
          position: "relative",
          cursor: "pointer",
          transition: "all 100ms linear",
        }}
      >
        <svg
          fill="#050505"
          viewBox="0 0 44 44"
          width="1.5em"
          height="1.5em"
          fontSize="13px"
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
          }}
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
        >
          <circle cx="7" cy="7" r="6" />
          <circle cx="22" cy="7" r="6" />
          <circle cx="37" cy="7" r="6" />
          <circle cx="7" cy="22" r="6" />
          <circle cx="22" cy="22" r="6" />
          <circle cx="37" cy="22" r="6" />
          <circle cx="7" cy="37" r="6" />
          <circle cx="22" cy="37" r="6" />
          <circle cx="37" cy="37" r="6" />
        </svg>
      </div>
      <span className={hover ? "link-menu-tag" : "nonactive-link-tag"}>
        Menu
      </span>
    </div>
  );
};
