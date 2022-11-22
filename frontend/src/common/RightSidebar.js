import React from "react";
import { VideoCall } from "../icons/VideoCall";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import "./css/rightsidebar.css";

const RightSidebar = () => {
  const Profiles = [
    { img: "/images/elon.jpg", name: "Elon Musk", border: true },
    { img: "/images/mark.png", name: "Mark Zuckerberg", border: false },
    { img: "/images/steve.jpeg", name: "Steve Jobs", border: false },
    { img: "/images/jeff.png", name: "Jeff Bezos", border: true },
    { img: "/images/rock.jpg", name: "The Rock", border: false },
    { img: "/images/roman.jpg", name: "Roman Reigns", border: false },
    { img: "/images/seth.jpg", name: "Seth Rollins", border: true },
    { img: "/images/john.jpg", name: "John Cena", border: false },
    { img: "/images/tony.jpg", name: "Tony Stark", border: true },
    { img: "/images/thor.jpg", name: "Thor Odinson", border: false },
  ];
  return (
    <div className="rightsidebar">
      <div className="sponserod">
        <h3>Sponsored</h3>
      </div>

      <div className="birthdays">
        <div>
          <h3>Birthdays</h3>
        </div>
        <div className="birth-div">
          <span className="birth"></span>
          <p>
            <b>Elon Musk</b> and <b>2 others</b>
            <br /> have birthdays today
          </p>
        </div>
      </div>

      <div className="contacts">
        <div className="contacts-first">
          <div>
            <h3>Contacts</h3>
          </div>
          <div style={{ display: "flex", gap: "0.1em" }}>
            <div
              className="icon-contact"
              style={{
                padding: "10px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <VideoCall color="var(--icon)" />
            </div>
            <div
              className="icon-contact"
              style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsSearch fontSize="15px" fill="var(--icon)" />
            </div>
            <div
              className="icon-contact"
              style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsThreeDots fill="var(--icon)" style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        {Profiles.map((profile) => {
          return (
            <div className="online">
              <div className="active-online">
                <img
                  src={process.env.PUBLIC_URL + `${profile.img}`}
                  alt="profile"
                  style={{
                    width: "36px",
                    height: "36px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    outline: profile.border ? "3px solid var(--blue)" : "none",
                    border: profile.border ? "1px solid white" : "none",
                  }}
                  loading="lazy"
                />
                <span></span>
              </div>
              <p style={{ pointerEvents: "none" }}>
                <b>{profile.name}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
