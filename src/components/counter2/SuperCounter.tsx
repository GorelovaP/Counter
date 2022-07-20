
import React, {useState} from "react";
import {Counter} from "../counter/Counter";
import {Setting} from "./setting/Setting";
import s from "./SuperCounter.module.css"
type SuperCounterPropsType = {

}


export const SuperCounter = (props: SuperCounterPropsType) => {
    let [count, setCount] = useState<number>(0)
    const Inc = () => {
        setCount(count+1);
    }
    const Reset = () => {
        setCount(0)
    }
    return (
        <div className={s.superCounter}>
            <Setting/>
            <Counter number={count} Reset={Reset} Inc={Inc}/>
        </div>
    )
}