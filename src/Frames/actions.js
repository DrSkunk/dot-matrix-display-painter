import {
  TOGGLE_PIXEL,
  ADD_FRAME,
  DELETE_FRAME,
  CLEAR_SQUARE,
  NEXT_FRAME,
  PREVIOUS_FRAME
} from "./constants";

export function togglePixel(frameIndex, squareIndex, pixelIndex) {
  return {
    type: TOGGLE_PIXEL,
    frameIndex,
    squareIndex,
    pixelIndex
  };
}

export function clearSquare(frameIndex, squareIndex) {
  return {
    type: CLEAR_SQUARE,
    frameIndex,
    squareIndex
  };
}

export function showNextFrame() {
  return {
    type: NEXT_FRAME
  };
}

export function showPreviousFrame() {
  return {
    type: PREVIOUS_FRAME
  };
}
