import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons({ onClick }) {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      {/* <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        onClick={onClick}
      >
        Add
      </Button> */}
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={onClick}
      >
        Add
      </Button>
    </span>
  );
}
