import s from "./Setting.module.css";
import c from "../../counter/Counter.module.css";


import React, {useEffect, useState} from "react";
import {UniversalButton} from "../../universalButton/UniversalButton";
import {UniversalInputNumber} from "../../universalInputNumber/UniversalInputNumber";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";


type SettingPropsType = {
    doSettings: (min: number, max: number) => void;
    toggle: boolean;
    changeToggle: (toggle: boolean) => void;
    valueError: boolean;
    setValueError: (error: boolean) => void;
    setNegative: (negative: boolean) => void;
}
export type ComponentId = "Min" | "Max";

export const Setting = (props: SettingPropsType) => {

    const minBorder = useSelector<AppRootStateType, number>(state => state.counter.minBorder)
    const maxBorder = useSelector<AppRootStateType, number>(state => state.counter.maxBorder)

    useEffect(() => {
        setCurrentMin(minBorder)
    }, [minBorder])

    useEffect(() => {
        setCurrentMax(maxBorder)
    }, [maxBorder])

    let [currentMin, setCurrentMin] = useState<number>(minBorder)
    let [currentMax, setCurrentMax] = useState<number>(maxBorder)


    const SetCurrentValueMaxOrMin = (id: ComponentId, value: number) => {
        id === "Min" ? setCurrentMin(value) : setCurrentMax(value)
        props.changeToggle(false)
    }

    useEffect(() => {
        currentMin >= currentMax ? props.setValueError(false) : props.setValueError(true)
        currentMin < 0 || currentMax < 0 ? props.setNegative(true) : props.setNegative(false)
    }, [currentMin, currentMax])


    return (
        <div className={c.counter}>
            <div className={s.display}>
                <UniversalInputNumber id="Max"
                                      setCurrentValue={SetCurrentValueMaxOrMin}
                                      value={currentMax}
                                      error={props.valueError}
                                      text={"Max значение:"}
                                      setDisabledForBtn={props.changeToggle}/>

                <UniversalInputNumber id="Min"
                                      setCurrentValue={SetCurrentValueMaxOrMin}
                                      value={currentMin}
                                      error={props.valueError}
                                      text={"Min значение:"}
                                      setDisabledForBtn={props.changeToggle}/>
            </div>
            <div className={s.buttonArea}>
                <UniversalButton callback={() => props.doSettings(currentMin, currentMax)} name={"Set"}
                                 boolean={!(!props.toggle && props.valueError && currentMin >= 0 && currentMax >= 0)}/>
            </div>
        </div>
    )
}