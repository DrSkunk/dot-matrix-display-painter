import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Squares from "../Squares";
import { showNextFrame, showPreviousFrame } from "./actions";

const styles = {};

class Frames extends Component {
  render() {
    const { classes, frames, showNextFrame, showPreviousFrame } = this.props;
    const nextFrameDisabled = frames.currentFrame === frames.frames.length - 1;
    const previousFrameDisabled = frames.currentFrame === 0;
    return (
      <div>
        <Squares frameIndex={frames.currentFrame} />
        <div>Current frame: {frames.currentFrame}</div>
        <div>
          <button onClick={showPreviousFrame} disabled={previousFrameDisabled}>
            {"<"}
          </button>
          <button onClick={showNextFrame} disabled={nextFrameDisabled}>
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    showNextFrame: () => {
      dispatch(showNextFrame());
    },
    showPreviousFrame: () => {
      dispatch(showPreviousFrame());
    }
  };
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Frames);

export default injectSheet(styles)(connected);
