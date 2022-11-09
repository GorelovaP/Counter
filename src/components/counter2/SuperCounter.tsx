import React from "react";
import {Counter} from "../counter/Counter";
import {Setting} from "./setting/Setting";
import s from "./SuperCounter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../state/store";
import {
    changeToggleAC,
    CounterStateType,
    plusCounterAC,
    resetCounterAC, setErrorValueAC,
    setMaxBorderAC,
    setMinBorderAC, setNegativeAC, setToLocalStorageTC
} from "../../state/counter-reducer";

export const SuperCounter = () => {

    let dispatch = useDispatch<AppDispatch>()
    const {
        minBorder,
        toggle,
        error,
        negative
    } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    const Inc = () => {
        dispatch(plusCounterAC())
    }
    const Reset = () => {
        dispatch(resetCounterAC(minBorder))
    }
    const changeToggle = (value: boolean) => {
        dispatch(changeToggleAC(value))
    }
    const setError = (error: boolean) => {
        dispatch(setErrorValueAC(error))
    }
    const setNegative = (negative: boolean) => {
        dispatch(setNegativeAC(negative))
    }

    const doSettings = (CurrentMin: number, CurrentMax: number) => { //применить настройки по клику на кнопку
        if (!toggle) {
            changeToggle(true)
            dispatch(setToLocalStorageTC(CurrentMin, CurrentMax))
            dispatch(resetCounterAC(CurrentMin))
            dispatch(setMaxBorderAC(CurrentMax))
            dispatch(setMinBorderAC(CurrentMin))
        }
    }

    return (

        <div className={s.superCounter}>
            <Setting doSettings={doSettings}
                     toggle={toggle}
                     changeToggle={changeToggle}
                     valueError={error}
                     setValueError={setError}
                     setNegative={setNegative}
            />
            <Counter
                choice={toggle}
                valueError={error}
                Reset={Reset}
                Inc={Inc}
                negative={negative}
            />
        </div>
    )
}