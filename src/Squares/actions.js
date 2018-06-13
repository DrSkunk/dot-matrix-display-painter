import { TOGGLE_PIXEL } from './constants'

export function togglePixel (index) {
  return {
    type: TOGGLE_PIXEL,
    index,
  }
}
