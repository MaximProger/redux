import { combineReducers } from "redux";
import { TOGGLE_DISABLED, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const initialThemeState = {
  value: "light",
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

let isDisabled = false;

export function btnsReducer(state = isDisabled, action) {
  switch (action.type) {
    case TOGGLE_DISABLED:
      return (isDisabled = !isDisabled);
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  is_disabled: btnsReducer,
});
