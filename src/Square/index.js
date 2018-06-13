import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Pixel from "../Pixel";

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
    const { squares, classes, onPixelClick, index, onClearSquare } = this.props;
    const { pixels } = squares[index];

    const pixelsDom = pixels.map((active, i) => {
      return (
        <Pixel
          key={Math.random()}
          active={active}
          callback={() => onPixelClick(index, i)}
        />
      );
    });
    return (
      <div>
        <div className={classes.root}>{pixelsDom}</div>
        <button
          onClick={() => {
            onClearSquare(index);
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
    squares: state.squares
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPixelClick: (squareIndex, index) => {
      dispatch({ type: "TOGGLE_PIXEL", index, squareIndex });
    },
    onClearSquare: squareIndex => {
      dispatch({ type: "CLEAR_SQUARE", squareIndex });
    }
  };
};
const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);

export default injectSheet(styles)(connected);
