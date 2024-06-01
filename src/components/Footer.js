import React from "react";
import "../App.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>copyright © {year}</p>
      <p>made with ❤️ by <span style={{color:"red"}}>Shubham Tingare</span></p>

    </div>
  );
}
