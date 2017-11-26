import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const initialState = {};

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const initStore = () => {
  return store;
};
