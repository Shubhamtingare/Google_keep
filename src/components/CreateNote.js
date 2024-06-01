import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";

export default function CreateNote() {
  return (
    <div className="main">
      <form action="">
        <input type="text" name="" id="" placeholder="title" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <Button>
          <AddIcon />
        </Button>
      </form>
    </div>
  );
}
