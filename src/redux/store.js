import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { todoReducer } from "./todoPart/todoReducer";
import { loginReducer } from "./loginPart/loginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({todoReducer,loginReducer})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))