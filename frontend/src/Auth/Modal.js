import React from "react";
import ReactDom from "react-dom";
import "./css/login.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "20px 20px 40px 20px",
  zIndex: 1005,
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
};

const OVERLAY_STYLES = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  zIndex: 1000,
};

export default function Modal({ open, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="modal">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
