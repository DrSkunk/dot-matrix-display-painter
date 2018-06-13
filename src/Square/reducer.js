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
  switch (action.type) {
    case TOGGLE_PIXEL:
      const { index } = action;
      const { pixels } = state;
      if (!Number.isInteger(index) || index < 0 || index >= pixels.length) {
        return state;
      }
      return {
        pixels: [
          ...pixels.slice(0, index),
          !pixels[index],
          ...pixels.slice(index + 1)
        ]
      };
    case CLEAR_SQUARE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
