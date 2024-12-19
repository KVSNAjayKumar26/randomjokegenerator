import { applyMiddleware, createStore } from "redux";
import jokeReducer from "./reducers";
import { thunk } from "redux-thunk";
const store = createStore(jokeReducer, applyMiddleware(thunk));

export default store;