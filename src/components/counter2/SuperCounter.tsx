import React, {useEffect, useState} from "react";
import {Counter} from "../counter/Counter";
import {Setting} from "./setting/Setting";
import s from "./SuperCounter.module.css"

export const SuperCounter = () => {
    const defaultMin = () => {
        let StringValueMin = localStorage.getItem("Min");
        if (StringValueMin) {
            return JSON.parse(StringValueMin)
        }
        return 0
    }

    const defaultMax = () => {
        let StringValueMin = localStorage.getItem("Max");
        if (StringValueMin) {
            return JSON.parse(StringValueMin)
        }
        return 5
    }

    let [count, setCount] = useState<number>(0)
    let [min, setMin] = useState<number>(defaultMin)
    let [max, setMax] = useState<number>(defaultMax)
    let [toggle, setToggle] = useState<boolean>(true)
    let [valueError, setValueError] = useState<boolean>(true)
    let [negative, setNegative] = useState<boolean>(false)

    //localStorage.clear()
    console.log('state ,', {min, max})
    useEffect(() => {
        let StringValueMin = localStorage.getItem("Min");
        let StringValueMax = localStorage.getItem("Max");

        // console.log("StringValueMax" + StringValueMax)
        console.log('values ,', {StringValueMin, StringValueMax})
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

    const doSettings = (CurrentMin: number, CurrentMax: number) => { //применить настройки по клику на кнопку
        if (!toggle) {
            setToggle(true)
            setCount(CurrentMin)
            setMax(CurrentMax)
            setMin(CurrentMin)
        }
    }

    return (

        <div className={s.superCounter}>
            <Setting min={min}
                     max={max}
                     doSettings={doSettings}
                     toggle={toggle}
                     setToggle={setToggle}
                     valueError={valueError}
                     setValueError={setValueError}
                     setNegative={setNegative}
            />
            <Counter
                choice={toggle}
                number={count}
                Reset={Reset}
                Inc={Inc}
                min={min}
                max={max}
                valueError={valueError}
                negative={negative}
            />
        </div>
    )
}