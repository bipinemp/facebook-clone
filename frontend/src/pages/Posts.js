import React, { useRef, useEffect, useState } from "react";
// import axios from "../services/axiosInterceptopor";
import axios from "axios";
import "./css/posts.css";
import { ThreeDots } from "../icons/ThreeDots";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Stories from "../common/Stories";

const Posts = () => {
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const token = localStorage.getItem("token");
  const pic = localStorage.getItem("pic");

  const fileInputRef = useRef();

  const [inputClick, setInputClick] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const [like, setLike] = useState(false);
  const [post, setPost] = useState({
    desc: "",
    profile: "",
  });
  const [posts, setPosts] = useState([]);
  const [likeNo, setLikeNo] = useState(0);

  const handleLike = () => {
    setLikeNo(like ? likeNo - 1 : likeNo + 1);
    setLike(!like);
  };

  const handleInputClick = () => {
    setInputClick(true);
  };

  // Submitting Form/Post
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("profile", post.profile, post.profile.name);
    formdata.append("desc", post.desc);
    axios
      .post("http://localhost:4000/api/posts", formdata, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => null);
    alert("Posted Sucessfully !!!");
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setPosts(res.data.posts))
      .catch((error) => null);
  }, [token]);

  return (
    <div className="posts">
      <div className="stories">
        <Stories />
      </div>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <div className="post-form-input">
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              src={`http://localhost:4000/uploads/auth/${pic}`}
              alt="profile"
            />
            <input
              onChange={(e) =>
                setPost({ ...post, [e.target.name]: e.target.value })
              }
              value={post.desc}
              name="desc"
              type="text"
              onClick={handleInputClick}
              placeholder="What's on your mind, Bipin?"
              required
            />
          </div>
          <div className="preview-image">
            {image && (
              <>
                <div
                  className="cross cross-img"
                  onClick={() => {
                    setImage(null);
                    setPreview(null);
                  }}
                ></div>
                <img src={preview} alt="preview" />
              </>
            )}
          </div>
          <div className="post-form-options">
            <div>
              <span className="livevideo"></span>
              <p>LiveVideo</p>
            </div>
            <div className="image-upload">
              <input
                onChange={(e) => {
                  setPost({ ...post, profile: e.target.files[0] });
                  const f = e.target.files[0];
                  if (f && f.type.substring(0, 5) === "image") {
                    setImage(f);
                  } else {
                    setImage(null);
                  }
                }}
                type="file"
                accept="image/*"
                name="profile"
                required
                ref={fileInputRef}
              />
              <span
                className="photovideo"
                onClick={() => {
                  fileInputRef.current.click();
                }}
              ></span>
              <p>Photo/video</p>
            </div>
            <div>
              <span className="feeling"></span>
              <p>Feeling/activity</p>
            </div>
          </div>
          <div className={inputClick ? "post-btn" : "active-post-btn"}>
            <button>Post</button>
          </div>
        </form>
      </div>

      {posts.map((post) => {
        return (
          <div className="view-post" key={post._id}>
            <div className="view-post-first">
              <div className="first-1">
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      cursor: "pointer",
                    }}
                    src={`http://localhost:4000/uploads/auth/${pic}`}
                    alt="profile"
                  />
                </div>
                <div>
                  <div>
                    <h4
                      style={{
                        color: "var(--profile)",
                        fontSize: "0.9em",
                        cursor: "pointer",
                      }}
                    >
                      {fname} {lname}
                    </h4>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--input-text)",
                        fontSize: "0.7em",
                        letterSpacing: "0px",
                        cursor: "pointer",
                      }}
                    >
                      {formatDistanceToNow(new Date(post.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="Delete" onClick={() => handleDel(post._id)}>
                <AiFillDelete fill="var(--red)" />
                <p>Delete</p>
              </div> */}
              <div className="threedots">
                <ThreeDots />
              </div>
            </div>

            <div className="view-post-desc">
              <p>{post.desc}</p>
            </div>

            <div className="view-post-img">
              <img
                src={`http://localhost:4000/uploads/posts/${post.profile}`}
                alt="post_image"
              />
            </div>

            <div className="view-post-last">
              <div className="view-post-last-first">
                <img
                  style={{ width: "25px", height: "25px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/Facebook_Like_button.svg"
                  alt="like-button"
                />
                <p>{likeNo}</p>
              </div>
              <div>
                <p>100 Comments 10 Shares</p>
              </div>
            </div>

            <div className="view-post-lst">
              <div onClick={handleLike}>
                <span
                  className={like ? "active-like-icon" : "like-icon"}
                ></span>
                <p
                  style={{ color: like ? "var(--blue)" : "var(--input-text)" }}
                >
                  Like
                </p>
              </div>
              <div>
                <span className="comment-icon"></span>
                <p>Comment</p>
              </div>
              <div>
                <span className="share-icon"></span>
                <p>Share</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
