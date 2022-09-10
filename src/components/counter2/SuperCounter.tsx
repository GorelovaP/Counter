import React from "react";
import {Counter} from "../counter/Counter";
import {Setting} from "./setting/Setting";
import s from "./SuperCounter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    changeToggleAC,
    CounterStateType,
    plusCounterAC,
    resetCounterAC, setErrorValueAC,
    setMaxBorderAC,
    setMinBorderAC, setNegativeAC
} from "../../state/counter-reducer";

export const SuperCounter = () => {

    let dispatch = useDispatch()
    let dataCounter = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    let [currenValue, MinBorder, MaxBorder, toggle, error, negative] = [dataCounter.currenValue, dataCounter.minBorder, dataCounter.maxBorder, dataCounter.toggle, dataCounter.error, dataCounter.negative]

    const Inc = () => {
        dispatch(plusCounterAC())
    }
    const Reset = () => {
        dispatch(resetCounterAC(MinBorder))
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
            dispatch(resetCounterAC(CurrentMin))
            dispatch(setMaxBorderAC(CurrentMax))
            dispatch(setMinBorderAC(CurrentMin))
        }
    }

    return (

        <div className={s.superCounter}>
            <Setting min={MinBorder}
                     max={MaxBorder}
                     doSettings={doSettings}
                     toggle={toggle}
                     changeToggle={changeToggle}
                     valueError={error}
                     setValueError={setError}
                     setNegative={setNegative}
            />
            <Counter
                number={currenValue}
                min={MinBorder}
                max={MaxBorder}
                choice={toggle}
                valueError={error}
                Reset={Reset}
                Inc={Inc}
                negative={negative}
            />
        </div>
    )
}