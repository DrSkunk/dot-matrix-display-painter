import { TOGGLE_PIXEL } from './constants'

export function togglePixel (pixelIndex) {
  return {
    type: TOGGLE_PIXEL,
    pixelIndex,
  }
}
