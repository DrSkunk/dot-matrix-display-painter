import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = {
  root: {
    marginTop: 2,
    marginLeft: 2,
    width: 18,
    height: 18,
    border: "1px solid black",
    borderRadius: 18,
    "&:hover": {
      boxShadow: "0px 0px 0px 5px gray"
    }
  }
};

class Pixel extends Component {
  render() {
    const { classes, active, ghost, callback } = this.props;
    let style = { backgroundColor: "white" };
    if (active) {
      style.backgroundColor = "red";
    } else if (ghost) {
      style.backgroundColor = "pink";
    }
    return <div className={classes.root} style={style} onClick={callback} />;
  }
}

export default injectSheet(styles)(Pixel);
