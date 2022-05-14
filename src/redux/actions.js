import { CHANGE_THEME, DECREMENT, INCREMENT, TOGGLE_DISABLED } from "./types";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    // здесь блочу
    dispatch(btnsToggle());
    setTimeout(() => {
      dispatch(increment());
      // здесь разлочу
      dispatch(btnsToggle());
    }, 1000);
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export function btnsToggle() {
  return {
    type: TOGGLE_DISABLED,
  };
}
