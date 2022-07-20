import s from "./Setting.module.css";
import c from "../../counter/Counter.module.css";


import React from "react";
import {UniversalButton} from "../../universalButton/UniversalButton";
import {UniversalInputNumber} from "../../universalInputNumber/UniversalInputNumber";

const Set =()=>{

}

type SettingPropsType = {

}

export const Setting = (props: SettingPropsType) => {
    return (
        <div className={c.counter}>
            <div className={s.display}>
                <UniversalInputNumber text={"Max значение:"}/>
                <UniversalInputNumber text={"Min значение:"}/>
            </div>
            <div className={s.buttonArea}>
                <UniversalButton callback={Set} name={"Set"} boolean={true}/>
            </div>
        </div>
    )
}