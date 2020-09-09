import {configureStore, getDefaultMiddleware, ThunkAction, Action} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import rootReducer, {RootState} from "./RootReducer";
import {useDispatch} from "react-redux";

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({reducer: rootReducer, middleware});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store;