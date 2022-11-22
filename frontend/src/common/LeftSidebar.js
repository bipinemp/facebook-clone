import React, { useState } from "react";
import "./css/leftsidebar.css";
import { SeeMore } from "../icons/SeeMore";
import { SeeLess } from "../icons/SeeLess";

const LeftSidebar = () => {
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const pic = localStorage.getItem("pic");

  const [showMore, setShowMore] = useState(false);

  const Elements = [
    { className: "friends", p: "Friends" },
    { className: "saved", p: "Saved" },
    { className: "groups", p: "Groups" },
    { className: "marketplace", p: "MarketPlace" },
    { className: "watch", p: "Watch" },
    { className: "memories", p: "Memories" },
    { className: "pages", p: "Pages" },
    { className: "reels", p: "Reels" },
  ];
  const Elements2 = [
    { className: "adsmanager", p: "Ads Manager" },
    { className: "climate", p: "Climate Science Center" },
    { className: "covid", p: "COVID-19 Information Center" },
    { className: "crisis", p: "Crisis response" },
    { className: "digital", p: "Digital Collectibles" },
    { className: "emotional", p: "Emotional Health" },
    { className: "events", p: "Events" },
    { className: "favorites", p: "Favorites" },
    { className: "fundraisers", p: "Fundraisers" },
    { className: "gaming", p: "Gaming Video" },
    { className: "live", p: "Live videos" },
    { className: "messenger", p: "Messenger" },
    { className: "msg-kids", p: "Messenger Kids" },
    { className: "recent", p: "Most Recent" },
    { className: "orders", p: "Orders and payments" },
    { className: "play", p: "Play Games" },
    { className: "recentad", p: "Recent ad activity" },
  ];
  return (
    <div className="leftsidebar">
      <div className="leftsidebar-profile">
        <img
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid black",
          }}
          src={`http://localhost:4000/uploads/auth/${pic}`}
          alt="profile"
        />
        <p style={{ pointerEvents: "none", textTransform: "uppercase" }}>
          {fname} {lname}
        </p>
      </div>
      <div className="first-elems">
        {Elements.map((elem) => {
          return (
            <div className="elem">
              <span className={elem.className}></span>
              <p style={{ pointerEvents: "none" }}>{elem.p}</p>
            </div>
          );
        })}
      </div>
      {!showMore && (
        <div className="seemore" onClick={() => setShowMore(true)}>
          <SeeMore />
          <p style={{ pointerEvents: "none" }}>See more</p>
        </div>
      )}

      {showMore ? (
        <div className="second-elems">
          {Elements2.map((elem) => {
            return (
              <div className="elem">
                <span className={elem.className}></span>
                <p style={{ pointerEvents: "none" }}>{elem.p}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {showMore && (
        <div className="seemore" onClick={() => setShowMore(false)}>
          <SeeLess />
          <p style={{ pointerEvents: "none" }}>See Less</p>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
