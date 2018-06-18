import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Squares from "../Squares";
import {
  showNextFrame,
  showPreviousFrame,
  removeFrame,
  addFrame
} from "./actions";

const styles = {};

class Frames extends Component {
  render() {
    const {
      classes,
      frames,
      showNextFrame,
      showPreviousFrame,
      removeFrame,
      addFrame
    } = this.props;
    const nextFrameDisabled = frames.currentFrame === frames.frames.length - 1;
    const previousFrameDisabled = frames.currentFrame === 0;
    return (
      <div>
        <Squares frameIndex={frames.currentFrame} />
        <div>Current frame: {frames.currentFrame + 1}</div>
        <div>
          <button
            onClick={() => {
              removeFrame(frames.currentFrame);
            }}
          >
            Remove this frame
          </button>
          <button
            onClick={() => {
              addFrame(frames.currentFrame);
            }}
          >
            Add a frame here
          </button>
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
    },
    removeFrame: frameIndex => {
      dispatch(removeFrame(frameIndex));
    },
    addFrame: frameIndex => {
      dispatch(addFrame(frameIndex));
    }
  };
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Frames);

export default injectSheet(styles)(connected);
