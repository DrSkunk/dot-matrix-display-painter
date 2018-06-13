import { TOGGLE_PIXEL, ADD_SQUARE, REMOVE_SQUARE, CLEAR_SQUARE } from "./constants";
import squareReducer from "../Square/reducer";
import { initialState as squareInitialState } from "../Square/reducer";

export const initialState = [
  squareInitialState,
  squareInitialState,
  squareInitialState,
  squareInitialState,
  squareInitialState,
  squareInitialState,
  squareInitialState,
  squareInitialState
];

const reducer = function squaresReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PIXEL:
      const { squareIndex } = action;
      if (
        !Number.isInteger(squareIndex) ||
        squareIndex < 0 ||
        squareIndex >= state.length
      ) {
        return state;
      }
      return [
        ...state.slice(0, squareIndex),
        squareReducer(state[squareIndex], action),
        ...state.slice(squareIndex + 1)
      ];
    case CLEAR_SQUARE:

      if (
        !Number.isInteger(action.squareIndex) ||
        action.squareIndex < 0 ||
        action.squareIndex >= state.length
      ) {
        return state;
      }
      return [
        ...state.slice(0, action.squareIndex),
        squareReducer(state[action.squareIndex], action),
        ...state.slice(action.squareIndex + 1)
      ];

    case ADD_SQUARE:
      return [...state, squareInitialState];
    case REMOVE_SQUARE:
      if (
        !Number.isInteger(state.squareIndex) ||
        state.squareIndex < 0 ||
        state.squareIndex >= state.length
      ) {
        return state;
      }
      let copy = Object.assign({}, state);
      copy.splice(state.squareIndex, 1);
      return copy;
    default:
      return state;
  }
};

export default reducer;
