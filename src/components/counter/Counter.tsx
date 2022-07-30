import s from "./Counter.module.css"
import {Display} from "./display/Display";
import {ButtonArea} from "./buttonArea/ButtonArea";
import React from "react";

type CounterPropsType = {
    number: number;
    Inc: () => void;
    Reset: () => void;
    choice: boolean;
    min: number;
    max: number;
    valueError: boolean;
    negative: boolean;
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display choice={props.choice}
                     text={props.valueError && !props.negative ? "Enter values and press 'set'" : "Incorrect value!"}
                     number={props.number}
                     max={props.max}
                     valueError={props.valueError}
                     negative={props.negative}
            />

            <ButtonArea min={props.min}
                        max={props.max}
                        choice={props.choice}
                        number={props.number}
                        Reset={props.Reset}
                        Inc={props.Inc}/>
        </div>
    )
}