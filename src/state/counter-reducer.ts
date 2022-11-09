import {AppThunkType} from "./store";

const PLUS_COUNTER = "PLUS-COUNTER"
const RESET_COUNTER = "RESET-COUNTER"
const SET_CURRENT_VALUE_COUNTER = "SET_CURRENT_VALUE_COUNTER"
const SET_MIN_BORDER = "SET-MIN-BORDER"
const SET_MAX_BORDER = "SET-MAX-BORDER"
const CHANGE_TOGGLE = "CHANGE-TOGGLE"
const SET_ERROR = "SET-ERROR"
const IS_NEGATIVE = "IS-NEGATIVE"

export type ActionsType = ReturnType<typeof plusCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof setCurrentValueCounterAC>
    | ReturnType<typeof setMinBorderAC>
    | ReturnType<typeof setMaxBorderAC>
    | ReturnType<typeof changeToggleAC>
    | ReturnType<typeof setErrorValueAC>
    | ReturnType<typeof setNegativeAC>

export type CounterStateType = typeof initialState
const initialState = {
    currenValue: 0,
    minBorder: 0,
    maxBorder: 5,
    toggle: true,
    error: true,
    negative: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case PLUS_COUNTER: {
            return {...state, currenValue: state.currenValue + 1}
        }
        case RESET_COUNTER || SET_CURRENT_VALUE_COUNTER: {
            return {...state, currenValue: action.value}
        }
        case SET_MIN_BORDER  : {
            return {...state, minBorder: action.value}
        }
        case SET_MAX_BORDER  : {
            return {...state, maxBorder: action.value}
        }
        case CHANGE_TOGGLE  : {
            return {...state, toggle: action.toggle}
        }
        case SET_ERROR  : {
            return {...state, error: action.error}
        }
        case IS_NEGATIVE  : {
            return {...state, negative: action.negative}
        }
        default:
            return state
    }
}

export const plusCounterAC = () => {
    return {type: PLUS_COUNTER} as const
}
export const resetCounterAC = (value: number) => {
    return {type: RESET_COUNTER, value: value} as const
}
export const setCurrentValueCounterAC = (value: number) => {
    return {type: SET_CURRENT_VALUE_COUNTER, value: value} as const
}
export const setMinBorderAC = (value: number) => {
    return {type: SET_MIN_BORDER, value: value} as const
}
export const setMaxBorderAC = (value: number) => {
    return {type: SET_MAX_BORDER, value: value} as const
}
export const changeToggleAC = (toggle: boolean) => {
    return {type: CHANGE_TOGGLE, toggle: toggle} as const
}
export const setErrorValueAC = (error: boolean) => {
    return {type: SET_ERROR, error: error} as const
}
export const setNegativeAC = (negative: boolean) => {
    return {type: IS_NEGATIVE, negative: negative} as const
}

export const setToLocalStorageTC = (CurrentMin: number, CurrentMax: number): AppThunkType => dispatch => {
    localStorage.setItem("Min", JSON.stringify(CurrentMin));
    localStorage.setItem("Max", JSON.stringify(CurrentMax));
}
export const getFromLocalStorageTC = (): AppThunkType => (dispatch) => {
    let StringValueMin = localStorage.getItem("Min");
    let StringValueMax = localStorage.getItem("Max");

    console.log('values ,', {StringValueMin, StringValueMax})

    if (StringValueMin) {
        let NewValueMin = JSON.parse(StringValueMin)
        dispatch(setMinBorderAC(NewValueMin))
        dispatch(resetCounterAC(NewValueMin))
    }

    if (StringValueMax) {
        let NewValueMax = JSON.parse(StringValueMax)
        dispatch(setMaxBorderAC(NewValueMax))
    }
}
