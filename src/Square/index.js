import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Pixel from "../Pixel";
import { togglePixel, clearSquare } from "../Frames/actions";

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 25px)",
    gridTemplateRows: "repeat(8, 25px)",
    backgroundColor: "black",
    border: "1px solid gray"
  }
};

class Square extends Component {
  render() {
    const {
      classes,
      onPixelClick,
      frames,
      frameIndex,
      squareIndex,
      onClearSquare
    } = this.props;
    const { pixels } = frames[frameIndex][squareIndex];

    const pixelsDom = pixels.map((active, i) => {
      return (
        <Pixel
          key={`square${squareIndex}pixel${i}`}
          active={active}
          callback={() => onPixelClick(frameIndex, squareIndex, i)}
        />
      );
    });
    return (
      <div>
        <div className={classes.root}>{pixelsDom}</div>
        <button
          onClick={() => {
            onClearSquare(frameIndex, squareIndex);
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    frames: state.frames.frames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPixelClick: (frameIndex, squareIndex, pixelIndex) => {
      dispatch(togglePixel(frameIndex, squareIndex, pixelIndex));
    },
    onClearSquare: (frameIndex, squareIndex) => {
      dispatch(clearSquare(frameIndex,squareIndex));
    }
  };
};
const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);

export default injectSheet(styles)(connected);
