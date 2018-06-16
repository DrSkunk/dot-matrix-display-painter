import { TOGGLE_PIXEL, CLEAR_SQUARE } from './constants'

export function togglePixel ( pixelIndex, squareIndex ) {
  return {
    type: TOGGLE_PIXEL,
    pixelIndex,
    squareIndex
  }
}

export function clearSquare ( squareIndex ) {
  return {
    type: CLEAR_SQUARE,
    squareIndex
  }
}
