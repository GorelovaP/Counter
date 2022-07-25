import React, {useEffect, useState} from "react";
import {Counter} from "../counter/Counter";
import {Setting} from "./setting/Setting";
import s from "./SuperCounter.module.css"

export const SuperCounter = () => {
    let [count, setCount] = useState<number>(0)
    let [min, setMin] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [toggle, setToggle] = useState<boolean>(true)


    useEffect(() => {
        let StringValueMin = localStorage.getItem("Min");
        let StringValueMax = localStorage.getItem("Max");

        console.log(StringValueMax)

        if (StringValueMin) {
            let NewValueMin = JSON.parse(StringValueMin)
            setMin(NewValueMin)
            setCount(NewValueMin)
        }
        if (StringValueMax) {
            let NewValueMax = JSON.parse(StringValueMax)
            setMax(NewValueMax)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("Min", JSON.stringify(min));
        localStorage.setItem("Max", JSON.stringify(max));
    })


    const Inc = () => {
        setCount(count + 1);
    }
    const Reset = () => {
        setCount(min)
    }

    const doSettings = () => { //применить настройки по клику на кнопку
        if (!toggle) {
            setToggle(true)
            setCount(min)
        }

    }
    return (
        <div className={s.superCounter}>
            <Setting setMin={setMin}
                     setMax={setMax}
                     min={min}
                     max={max}
                     doSettings={doSettings}
                     toggle={toggle}
                     setToggle={setToggle}
            />
            <Counter
                choice={toggle}
                number={count}
                Reset={Reset}
                Inc={Inc}
                min={min}
                max={max}
            />
        </div>
    )
}