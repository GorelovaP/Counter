import React, {useEffect, useState} from "react";
import s from "./UniversalInputNumber.module.css"
import {ComponentId} from "../counter2/setting/Setting";

type UniversalInputNumberPropsType = {
    id: ComponentId;
    text: string;
    value: number;
    error: boolean;
    setCurrentValue: (id: ComponentId, value: number) => void
    setDisabledForBtn: (toggle: boolean) => void;
}
export const UniversalInputNumber = (props: UniversalInputNumberPropsType) => {

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    let [value, setValue] = useState<number>(props.value)
    let [error, setError] = useState<boolean>(false)

    const doOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let currentValueInt = JSON.parse(e.currentTarget.value)

        props.setCurrentValue(props.id, currentValueInt)
        setValue(currentValueInt)

        if (currentValueInt < 0) {
            setError(true)
        }
        if (currentValueInt >= 0) {
            setError(false)
            props.setDisabledForBtn(false)
        }
    }


    let ClassNameForInput = `${error || !props.error ? s.red : " "} ${s.input}`
    return (

        <div className={s.universalInputArea}>
            <label>{props.text}</label>
            <input onChange={(event) => {
                doOnChange(event)
            }}
                   value={value}
                   className={ClassNameForInput} type={"number"}/>
        </div>
    )
}