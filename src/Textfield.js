import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";



export default function Textfield({ label }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      style={{ marginLeft: "20px" }}
    />
  );
}
