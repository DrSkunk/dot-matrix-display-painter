import reducer from "./reducer";
import { initialState } from "./reducer";
import { initialState as squaresInitialState } from "../Squares/reducer";

import { TOGGLE_PIXEL } from "./constants";

describe("Frames reducer", () => {
  it("should return the initial state Frames", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: -1
      })
    ).toEqual(initialState);
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 10,
        squareIndex: 0,
        frameIndex: -2
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 10,
        squareIndex: 10,
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 10,
        squareIndex: 0,
        frameIndex: "hey"
      })
    ).toEqual(initialState);
  });
});
