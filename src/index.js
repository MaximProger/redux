import "./styles.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const themeBtn = document.querySelector("#theme");

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

store.subscribe(function () {
  const state = store.getState();
  counter.textContent = state.counter;
  const body = document.querySelector("body");
  body.className = state.theme.value;

  addBtn.disabled = state.is_disabled;
  subBtn.disabled = state.is_disabled;
  themeBtn.disabled = state.is_disabled;
});

store.dispatch({ type: "INIT_APPLICATION" });

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});
