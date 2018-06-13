import reducer from "./reducer";
import { initialState } from "./reducer";

import { TOGGLE_PIXEL } from "./constants";

describe("Square reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: -1
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: 64
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: 164
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: Number.MAX_VALUE
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: "zero"
      })
    ).toEqual(initialState);
  });

  it("should toggle the correct pixel", () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: 0
      })
    ).toEqual({
      pixels: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    });

    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        index: 63
      })
    ).toEqual({
      pixels: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true
      ]
    });
  });
});
