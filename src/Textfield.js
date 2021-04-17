import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";



export default function Textfield({ label, type,name,onchange }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      style={{ marginLeft: "20px",  padding:  "15px" }}
      type={type}
      name={name}
       onChange={onchange}
    />
  );
}
