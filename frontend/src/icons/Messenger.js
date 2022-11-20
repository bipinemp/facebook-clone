import { useState } from "react";

export const Messenger = () => {
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
          viewBox="0 0 28 28"
          alt=""
          class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
          fill="#050505"
          width="1.5em"
          height="1.5em"
          fontSize="13px"
          style={{ position: "absolute", inset: 0, margin: "auto" }}
        >
          <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z" />
        </svg>
      </div>
      <span className={hover ? "link-msg-tag" : "nonactive-link-tag"}>
        Messenger
      </span>
    </div>
  );
};
