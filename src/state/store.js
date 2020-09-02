import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import drugReducer from "./reducers/drugReducer";
import formulaReducer from "./reducers/formulaReducer";

const mainReducer = combineReducers({
  prescription: drugReducer,
  formula: formulaReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;
const store = createStore(
  mainReducer,
  {},
  compose(applyMiddleware(thunk /* ,etc , other middlewares */), devTools)
);

export default store;
