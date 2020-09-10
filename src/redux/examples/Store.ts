import {configureStore, getDefaultMiddleware, ThunkAction, Action} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import rootReducer, {RootState} from "./RootReducer";

// Normally you would decide based upon environment whether to use logger or not (and maybe you would also enable hot loading for store in dev env)
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({reducer: rootReducer, middleware});

// Helpful for defining async actions (e.g. fetching data) -> see also https://redux-toolkit.js.org/tutorials/advanced-tutorial#logic-for-fetching-github-repo-details
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;