import React, { useEffect, useState } from "react";
// import axios from "../services/axiosInterceptopor";
import axios from "axios";
import "./css/posts.css";
import { ThreeDots } from "../icons/ThreeDots";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AllPosts = () => {
  const token = localStorage.getItem("token");

  const [like, setLike] = useState(false);
  const [likeNo, setLikeNo] = useState(0);

  const [posts, setPosts] = useState([]);

  const handleLike = () => {
    setLike(!like);
    setLikeNo(like ? likeNo - 1 : likeNo + 1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts/all", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => null);
  }, [token]);
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="view-post all-posts" key={post._id}>
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
                    src={`http://localhost:4000/uploads/auth/${post.user_id.pic}`}
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
                      {post.user_id.fname} {post.user_id.lname}
                    </h4>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--input-text)",
                        fontSize: "0.7em",
                        letterSpacing: "0px",
                        cursor: "pointer",
                        textAlign: "start",
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

export default AllPosts;
