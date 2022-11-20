import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <img
        alt="offline"
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
      />
      <h3>This page isn't available. Sorry about that.</h3>
      <p>
        Go back to
        <span onClick={() => navigate("/login")}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb"
            style={{ width: "150px" }}
            className="fb"
          />
        </span>
        page.
      </p>
    </div>
  );
}

export default Error;
