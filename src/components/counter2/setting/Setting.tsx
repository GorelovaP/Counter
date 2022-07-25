import s from "./Setting.module.css";
import c from "../../counter/Counter.module.css";


import React, {Dispatch, SetStateAction} from "react";
import {UniversalButton} from "../../universalButton/UniversalButton";
import {UniversalInputNumber} from "../../universalInputNumber/UniversalInputNumber";


type SettingPropsType = {
    min: number;
    max: number;
    setMin: Dispatch<SetStateAction<number>>;
    setMax: Dispatch<SetStateAction<number>>;
    doSettings: () => void;
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export const Setting = (props: SettingPropsType) => {

    const changeToggle = () => {
        props.setToggle(false)
    }
    return (
        <div className={c.counter}>
            <div className={s.display}>
                <UniversalInputNumber additionalAction={changeToggle} setValue={props.setMax} value={props.max}
                                      text={"Max значение:"}/>
                <UniversalInputNumber additionalAction={changeToggle} setValue={props.setMin} value={props.min}
                                      text={"Min значение:"}/>
            </div>
            <div className={s.buttonArea}>
                <UniversalButton callback={props.doSettings} name={"Set"} boolean={props.toggle}/>
            </div>
        </div>
    )
}