import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import s from "./UniversalInputNumber.module.css"
import {ComponentId} from "../counter2/setting/Setting";

type UniversalInputNumberPropsType = {
    id: ComponentId;
    text: string;
    value: number;
    error: boolean;
    setCurrentValue: (id: ComponentId, value: number) => void
    additionalAction?: () => void;
    setDisabledForBtn: Dispatch<SetStateAction<boolean>>;
}
export const UniversalInputNumber = (props: UniversalInputNumberPropsType) => {
    console.log(props.value + "передаваемые данные для отрисовки инпута")
    let [value, setValue] = useState<number>(props.value)
    let [error, setError] = useState<boolean>(false)

    const doOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value)
        let currentValueInt = JSON.parse(e.currentTarget.value)
        // console.log(currentValueInt)
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
            <label>{props.text}</label> <input onChange={(event) => {
            doOnChange(event)
            if (props.additionalAction !== undefined) {
                props.additionalAction();
            }

        }}
                                               value={value}
                                               className={ClassNameForInput} type={"number"}/>
        </div>
    )
}