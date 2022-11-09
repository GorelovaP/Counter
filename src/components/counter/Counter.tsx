import s from "./Counter.module.css"
import {Display} from "./display/Display";
import {ButtonArea} from "./buttonArea/ButtonArea";
import React from "react";

type CounterPropsType = {
    Inc: () => void;
    Reset: () => void;
    choice: boolean;
    valueError: boolean;
    negative: boolean;
}
export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counter}>
            <Display choice={props.choice}
                     text={props.valueError && !props.negative ? "Enter values and press 'set'" : "Incorrect value!"}
                     valueError={props.valueError}
                     negative={props.negative}
            />

            <ButtonArea choice={props.choice}
                        Reset={props.Reset}
                        Inc={props.Inc}/>
        </div>
    )
}