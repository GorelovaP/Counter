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
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display choice={props.choice}
                     text={"Enter values and press 'set'"}
                     number={props.number}
                     max={props.max}/>

            <ButtonArea min={props.min}
                        max={props.max}
                        choice={props.choice}
                        number={props.number}
                        Reset={props.Reset}
                        Inc={props.Inc}/>
        </div>
    )
}