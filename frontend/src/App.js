import React from "react";
import Posts from "./pages/Posts";
import "./pages/css/mainhome.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/Market";
import Games from "./pages/Games";
import ProtectedRoutes from "./services/ProtectedRoutes";
import Login from "./Auth/Login";
import MainHome from "./pages/MainHome";
import AllPosts from "./pages/AllPosts";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<MainHome />}>
              <Route path="/" element={<Posts />} />
              <Route path="posts" element={<AllPosts />} />
              <Route path="market" element={<Market />} />
              <Route path="games" element={<Games />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
