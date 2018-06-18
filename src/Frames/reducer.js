import {
  TOGGLE_PIXEL,
  CLEAR_SQUARE,
  NEXT_FRAME,
  PREVIOUS_FRAME,
  ADD_FRAME,
  DELETE_FRAME,
  REMOVE_FRAME
} from "./constants";
import { initialState as squaresInitialState } from "../Squares/reducer";
import squaresReducer from "../Squares/reducer";
import { showPreviousFrame, showNextFrame } from "./actions";

export const initialState = {
  currentFrame: 0,
  frames: [
    squaresInitialState,
    squaresInitialState,
    squaresInitialState,
    squaresInitialState
  ]
};

const reducer = function framesReducer(state = initialState, action) {
  const { frameIndex } = action;
  switch (action.type) {
    case TOGGLE_PIXEL:
      if (invalidFrameIndex(state, frameIndex)) {
        return state;
      }
      return {
        ...state,
        frames: [
          ...state.frames.slice(0, frameIndex),
          squaresReducer(state.frames[frameIndex], action),
          ...state.frames.slice(frameIndex + 1)
        ]
      };
    case CLEAR_SQUARE:
      if (invalidFrameIndex(state, frameIndex)) {
        return state;
      }
      return {
        ...state,
        frames: [
          ...state.frames.slice(0, frameIndex),
          squaresReducer(state.frames[frameIndex], action),
          ...state.frames.slice(frameIndex + 1)
        ]
      };
    case NEXT_FRAME:
      if (state.currentFrame === state.frames.length - 1) {
        return state;
      }
      return {
        ...state,
        currentFrame: state.currentFrame + 1
      };
    case PREVIOUS_FRAME:
      if (state.currentFrame === 0) {
        return state;
      }
      return {
        ...state,
        currentFrame: state.currentFrame - 1
      };
    case ADD_FRAME:
      if (invalidFrameIndex(state, frameIndex)) {
        return state;
      }
      return framesReducer(
        {
          currentFrame: state.currentFrame,
          frames: [
            ...state.frames.slice(0, frameIndex),
            squaresInitialState,
            ...state.frames.slice(frameIndex)
          ]
        },
        showNextFrame()
      );
    case REMOVE_FRAME:
      if (invalidFrameIndex(state, frameIndex)) {
        return state;
      }
      return framesReducer(
        {
          currentFrame: state.currentFrame,
          frames: [
            ...state.frames.slice(0, frameIndex),
            ...state.frames.slice(frameIndex + 1)
          ]
        },
        showPreviousFrame()
      );
    default:
      return state;
  }
};

function invalidFrameIndex(state, frameIndex) {
  return (
    !Number.isInteger(frameIndex) ||
    frameIndex < 0 ||
    frameIndex >= state.frames.length
  );
}

export default reducer;
