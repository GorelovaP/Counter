import s from "./Counter.module.css"
import {Display} from "./display/Display";
import {ButtonArea} from "./buttonArea/ButtonArea";
import React from "react";

type CounterPropsType = {
    number: number;
    Inc: () => void;
    Reset: () => void;
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display number={props.number}/>
            <ButtonArea number={props.number} Reset={props.Reset} Inc={props.Inc}/>
        </div>
    )
}