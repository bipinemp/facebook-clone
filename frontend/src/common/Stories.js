import React from "react";
import "../pages/css/posts.css";

function Stories() {
  const StoryImg = [
    { img: "images/elon.jpg", profile: "images/elon.jpg" },
    { img: "images/rock.jpg", profile: "images/rock.jpg" },
    { img: "images/john.jpg", profile: "images/john.jpg" },
    { img: "images/tony.jpg", profile: "images/tony.jpg" },
    { img: "images/thor.jpg", profile: "images/thor.jpg" },
    { img: "images/seth.jpg", profile: "images/seth.jpg" },
    { img: "images/rrr.jpg", profile: "images/rrr.jpg" },
    { img: "images/roman.jpg", profile: "images/roman.jpg" },
    { img: "images/mark.png", profile: "images/mark.png" },
  ];
  return (
    <div className="story">
      {StoryImg.map((story) => {
        return (
          <div key={story} className="st">
            <div className="circlepic">
              <img
                src={process.env.PUBLIC_URL + story.img}
                alt="story"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "4px solid var(--blue)",
                }}
              />
            </div>
            <div className="storyimg">
              <img src={process.env.PUBLIC_URL + story.img} alt="story" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
