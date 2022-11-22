import React, { useEffect, useRef, useState } from "react";
import axios from "../services/axiosInterceptopor";

function Register({ setIsOpen }) {
  const [border, setBorder] = useState(false);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const Months = [
    { name: "Jan" },
    { name: "Feb" },
    { name: "Mar" },
    { name: "Apr" },
    { name: "May" },
    { name: "Jun" },
    { name: "Jul" },
    { name: "Aug" },
    { name: "Sep" },
    { name: "Oct" },
    { name: "Nov" },
    { name: "Dec" },
  ];
  const Days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const Year = [
    1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916,
    1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928,
    1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940,
    1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952,
    1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964,
    1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
    1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
    1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

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

  const fileInputRef = useRef();

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    year: "",
    month: "",
    day: "",
    pic: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("fname", userData.fname);
    formdata.append("lname", userData.lname);
    formdata.append("email", userData.email);
    formdata.append("password", userData.password);
    formdata.append("gender", userData.gender);
    formdata.append("year", userData.year);
    formdata.append("month", userData.month);
    formdata.append("day", userData.day);
    formdata.append("pic", userData.pic);

    const response = await axios
      .post("http://localhost:4000/api/auth/register", formdata)
      .catch(
        (error) =>
          setEmptyFields(error.response.data.emptyFields) ||
          setError(error.response.data.message)
      );
    if (response.status === 201) {
      setIsOpen(false);
      setPreview(null);
      setUserData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        gender: "",
        year: "",
        month: "",
        day: "",
        pic: "",
      });
    }
  };

  return (
    <div className="sign">
      <form onSubmit={handleRegister} className="sign-form">
        {error && <p className="error">{error}</p>}
        <div className="first">
          <div>
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
          </div>
          <span className="cross" onClick={() => setIsOpen(false)}></span>
        </div>

        <div className="second">
          <div className="second-first">
            <input
              onChange={(e) =>
                setUserData({ ...userData, fname: e.target.value })
              }
              style={{
                outline:
                  emptyFields.includes("fname") && "1px solid var(--red)",
              }}
              value={userData.fname}
              name="fname"
              type="text"
              placeholder="Fist name"
            />
            <input
              onChange={(e) =>
                setUserData({ ...userData, lname: e.target.value })
              }
              style={{
                outline:
                  emptyFields.includes("lname") && "1px solid var(--red)",
              }}
              value={userData.lname}
              name="lname"
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            style={{
              outline: emptyFields.includes("email") && "1px solid var(--red)",
            }}
            value={userData.email}
            name="email"
            type="email"
            placeholder="Mobile number or email"
          />
          <input
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            style={{
              outline:
                emptyFields.includes("password") && "1px solid var(--red)",
            }}
            value={userData.password}
            name="password"
            type="password"
            placeholder="New password"
          />
        </div>

        <div
          style={{
            outline: emptyFields.includes("pic") && "1px solid var(--red)",
            display: "flex",
            alignItems: "center",
            gap: "2em",
          }}
        >
          <div className="user-image">
            <input
              onChange={(e) => {
                setUserData({ ...userData, pic: e.target.files[0] });
                const f = e.target.files[0];
                if (f && f.type.substring(0, 5) === "image") {
                  setImage(f);
                } else {
                  setImage(null);
                }
              }}
              type="file"
              accept="image/*"
              name="pic"
              ref={fileInputRef}
            />
            <span
              className="user-pic"
              onClick={() => {
                fileInputRef.current.onClick();
              }}
            ></span>
            <span>Profile Picture</span>
          </div>
          {preview && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1em",
              }}
            >
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "4px solid var(--blue)",
                }}
                src={preview}
                alt="profile"
              />
              <span
                className="cross"
                style={{
                  backgroundColor: "var(--icon-hover)",
                  borderRadius: "50%",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => setImage(null)}
              ></span>
            </div>
          )}
        </div>

        <div className="third">
          <p>Brithday</p>
          <div className="select">
            <select
              onChange={(e) =>
                setUserData({ ...userData, month: e.target.value })
              }
              value={userData.month}
              name="month"
              type="text"
              style={{
                outline:
                  emptyFields.includes("month") && "1px solid var(--red)",
              }}
            >
              {Months.map((month) => {
                return <option>{month.name}</option>;
              })}
            </select>
            <select
              onChange={(e) =>
                setUserData({ ...userData, day: e.target.value })
              }
              style={{
                outline: emptyFields.includes("day") && "1px solid var(--red)",
              }}
              value={userData.day}
              name="day"
              type="text"
            >
              {Days.map((day) => {
                return <option>{day}</option>;
              })}
            </select>

            <select
              onChange={(e) =>
                setUserData({ ...userData, year: e.target.value })
              }
              style={{
                outline: emptyFields.includes("year") && "1px solid var(--red)",
              }}
              value={userData.year}
              name="year"
              type="text"
            >
              {Year.map((year) => {
                return <option name="year">{year}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="fourth">
          <p>Gender</p>
          <div className="gender">
            <div
              onMouseOver={() => setBorder(true)}
              onMouseOut={() => setBorder(false)}
              style={{ border: border && "1px solid var(--blue)" }}
            >
              <span>Male</span>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                value="male"
                type="radio"
                name="gender"
                style={{
                  outline:
                    emptyFields.includes("gender") && "1px solid var(--red)",
                  outlineStyle: "auto",
                }}
              />
            </div>
            <div
              onMouseOver={() => setBorder1(true)}
              onMouseOut={() => setBorder1(false)}
              style={{ border: border1 && "1px solid var(--blue)" }}
            >
              <span>Female</span>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                style={{
                  outline:
                    emptyFields.includes("gender") && "1px solid var(--red)",
                  outlineStyle: "auto",
                }}
                value="female"
                type="radio"
                name="gender"
              />
            </div>
            <div
              onMouseOver={() => setBorder2(true)}
              onMouseOut={() => setBorder2(false)}
              style={{ border: border2 && "1px solid var(--blue)" }}
            >
              <span>Others</span>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                style={{
                  outline:
                    emptyFields.includes("gender") && "1px solid var(--red)",
                  outlineStyle: "auto",
                }}
                value="others"
                type="radio"
                name="gender"
              />
            </div>
          </div>
        </div>

        <div className="fifth">
          <p>
            People who use our service may have uploaded your contact
            information to Facebook. <span>Learn more.</span>
          </p>
          <p>
            By clicking Sign Up, you agree to our <span>Terms</span> ,
            <span> Privacy Policy</span> and <span>Cookies Policy.</span>
            You may receive SMS Notifications from us and can opt out any time.
          </p>
        </div>
        <div className="signup">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
