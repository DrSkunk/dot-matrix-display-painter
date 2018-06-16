import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Square from "../Square";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row"
  }
};

class Squares extends Component {
  render() {
    const { classes, frames, frameIndex } = this.props;
    const squares = frames.frames[frameIndex];
    const squareComponents = squares.map((_, i) => (
      <Square key={`square${i}`} squareIndex={i} frameIndex={frameIndex} />
    ));
    return <div className={classes.root}>{squareComponents}</div>;
  }
}

const mapStateToProps = state => ({
  frames: state.frames
});

const connected = connect(mapStateToProps)(Squares);

export default injectSheet(styles)(connected);
