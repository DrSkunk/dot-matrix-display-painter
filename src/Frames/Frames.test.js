import reducer from "./reducer";
import { initialState } from "./reducer";
import { initialState as squaresInitialState } from "../Squares/reducer";

import { TOGGLE_PIXEL } from "./constants";
import {
  togglePixel,
  showNextFrame,
  showPreviousFrame,
  addFrame,
  remove,
  removeFrame
} from "./actions";

describe("Frames reducer", () => {
  it("should return the initial state Frames", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(reducer(initialState, togglePixel(-1, 0, 0))).toEqual(initialState);
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(
      reducer(initialState, togglePixel(initialState.frames.length, 0, 0))
    ).toEqual(initialState);
    expect(
      reducer(initialState, togglePixel("string is invalid", 0, 0))
    ).toEqual(initialState);
    expect(reducer(initialState, showPreviousFrame())).toEqual(initialState);
  });

  it("should move the currentFrame", () => {
    expect(reducer(initialState, showNextFrame())).toEqual({
      ...initialState,
      currentFrame: 1
    });

    expect(
      reducer({ ...initialState, currentFrame: 1 }, showPreviousFrame())
    ).toEqual({
      ...initialState,
      currentFrame: 0
    });

    expect(
      reducer({ ...initialState, currentFrame: 3 }, showNextFrame())
    ).toEqual({ ...initialState, currentFrame: 3 });
  });

  it("should add/remove a frame at specified index", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(reducer(initialState, addFrame(0))).toEqual({
      currentFrame: 1,
      frames: [
        squaresInitialState,
        squaresInitialState,
        squaresInitialState,
        squaresInitialState,
        squaresInitialState
      ]
    });
    expect(reducer(initialState, addFrame(0))).toEqual({
      currentFrame: 1,
      frames: [
        squaresInitialState,
        squaresInitialState,
        squaresInitialState,
        squaresInitialState,
        squaresInitialState
      ]
    });

    expect(reducer(initialState, removeFrame(0))).toEqual({
      currentFrame: 0,
      frames: [squaresInitialState, squaresInitialState, squaresInitialState]
    });

    expect(
      reducer({ currentFrame: 1, ...initialState }, removeFrame(0))
    ).toEqual({
      currentFrame: 0,
      frames: [squaresInitialState, squaresInitialState, squaresInitialState]
    });
  });
});
