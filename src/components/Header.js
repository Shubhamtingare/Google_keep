import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import "../App.css";

export default function Header() {
  return (
    <div className="heading">
      <DiamondIcon className="heading_logo" />
      <span>Shubham Keep</span>
    </div>
  );
}
