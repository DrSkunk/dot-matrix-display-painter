import reducer from "./reducer";
import { initialState } from "./reducer";
import { initialState as squareInitialState } from "../Square/reducer";

import { TOGGLE_PIXEL, ADD_SQUARE } from "./constants";

describe("Squares reducer", () => {
  it("should return the initial state Squares", () => {
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
        squareIndex: -1
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 10,
        squareIndex: 10
      })
    ).toEqual(initialState);
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 10,
        squareIndex: "hey"
      })
    ).toEqual(initialState);
  });

  it("should toggle the correct pixel Squares", () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_PIXEL,
        pixelIndex: 0,
        squareIndex: 0
      })
    ).toEqual([
      {
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
      },
      squareInitialState,
      squareInitialState,
      squareInitialState,
      squareInitialState,
      squareInitialState,
      squareInitialState,
      squareInitialState
    ]);
  });

  // it("should should add and remove squares", () => {
  //   expect(
  //     reducer(initialState, {
  //       type: ADD_SQUARE
  //     })
  //   ).toEqual([...initialState, squareInitialState]);
  //   // expect(
  //   //   reducer(initialState, {
  //   //     type: REMOVE_SQUARE,
  //   //     squareIndex: 2
  //   //   })
  //   // ).toEqual([squareInitialState,squareInitialState,squareInitialState]);
  // });
});
