import { legacy_createStore, applyMiddleware } from "redux";
import nameReducer from "../reducer/nameReducer"
import logger from "redux-logger";

var mystore = legacy_createStore(nameReducer, applyMiddleware(logger));

export default mystore;