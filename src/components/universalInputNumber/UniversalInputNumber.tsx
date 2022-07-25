import React from "react";
import s from "./UniversalInputNumber.module.css"

type UniversalInputNumberPropsType = {
    text: string;
    value: number;
    setValue: (n: number) => void;
    additionalAction?: () => void;
}
export const UniversalInputNumber = (props: UniversalInputNumberPropsType) => {
    const doOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(JSON.parse(e.currentTarget.value))
    }
    return (
        <div className={s.universalInputArea}>
            <label>{props.text}</label> <input onChange={(event) => {
            doOnChange(event)
            if (props.additionalAction != undefined) {
                props.additionalAction();
            }

        }}
                                               value={props.value}
                                               className={s.input} type={"number"}/>
        </div>
    )
}