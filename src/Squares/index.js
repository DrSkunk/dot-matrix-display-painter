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
    const { classes, squares, onAddSquare } = this.props;
    const squareComponents = squares.map((_, i) => (
      <Square key={`square${i}`} index={i} />
    ));
    return (
      <div className={classes.root}>
        {squareComponents}
        {/* <button onClick={onAddSquare}>Add Square</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squares: state.squares
});

const mapDispatchToProps = dispatch => {
  return {
    onPixelClick: index => {
      dispatch({ type: "TOGGLE_PIXEL", index });
    },
    onAddSquare: _ => {
      dispatch({ type: "ADD_SQUARE" });
    }
  };
};
const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Squares);

export default injectSheet(styles)(connected);
