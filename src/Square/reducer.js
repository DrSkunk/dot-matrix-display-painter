import { TOGGLE_PIXEL, CLEAR_SQUARE } from "./constants";

export const initialState = {
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
    false
  ]
};

const reducer = function squareReducer(state = initialState, action) {
  console.log("square", action);

  switch (action.type) {
    case TOGGLE_PIXEL:
      const { pixelIndex } = action;
      const { pixels } = state;
      if (
        !Number.isInteger(pixelIndex) ||
        pixelIndex < 0 ||
        pixelIndex >= pixels.length
      ) {
        return state;
      }
      return {
        pixels: [
          ...pixels.slice(0, pixelIndex),
          !pixels[pixelIndex],
          ...pixels.slice(pixelIndex + 1)
        ]
      };
    case CLEAR_SQUARE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
