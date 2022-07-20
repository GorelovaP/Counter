import React from "react";
import s from "./UniversalInputNumber.module.css"

type UniversalInputNumberPropsType={
    text: string;
}
export const  UniversalInputNumber =(props: UniversalInputNumberPropsType)=>{
    return(
        <div className={ s.universalInputArea}>
            <label>{props.text}</label> <input className={s.input} type={"number"}/>
        </div>
    )
}