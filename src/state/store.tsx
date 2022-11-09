import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {ActionsType, counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppActionsType = ActionsType

export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionsType>
// @ts-ignore
window.store = store
