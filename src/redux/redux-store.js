import { applyMiddleware, combineReducers,  createStore } from "redux";
import thunk from "redux-thunk";
import { employeeReducer } from "./employeeReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from "../module/localStorageModule";

const rootReducer = combineReducers({
  employeesPage: employeeReducer,
});

const presistingState = loadState()

const store = createStore(
  rootReducer,presistingState,
  composeWithDevTools(applyMiddleware(thunk))
);

window.store = store;
export default store;
