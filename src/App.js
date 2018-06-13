import React, { Component } from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import Highlight from "react-highlight";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Squares from "./Squares";
import "../node_modules/highlight.js/styles/idea.css";

const styles = {
  framebuffer: {
    width: "20%",
    height: "60vh",
    overflow: "scroll"
  }
};
function toFrameBuffer(squares) {
  let res = "# Python framebuffer code\n\n";
  res += squares
    .map(({ pixels }, squareIndex) => {
      let result = `# Square ${squareIndex + 1}\n`;
      result += pixels
        .map((pixel, pixelIndex) => {
          const x = pixelIndex % 8 + squareIndex  * 8;
          const y = Math.floor(pixelIndex / 8);
          const value = pixel ? 1 : 0;
          return `display.pixel(${x},${y},${value})`;
        })
        .join("\n");
      return result + "\n\n";
    })
    .join("\n");
  return res;
}

class App extends Component {
  render() {
    const { classes, squares } = this.props;
    const framebuffer = toFrameBuffer(squares);
    return (
      <div>
        <Squares />
        <CopyToClipboard
          text={framebuffer}
          onCopy={() => alert("Copied to clipboard")}
        >
          <button>Copy to framebuffer code to clipboard</button>
        </CopyToClipboard>
        <div className={classes.framebuffer}>
          <Highlight className="python">{framebuffer}</Highlight>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const connected = connect(mapStateToProps)(App);

export default injectSheet(styles)(connected);
