import s from "./UniversalButton.module.css"
import React from "react";

type UniversalButtonPropsType={
    callback:()=>void
    name: string;
    boolean: boolean;
}
export const UniversalButton =(props: UniversalButtonPropsType)=>{
    return(
        <button disabled={props.boolean} onClick={props.callback} className={s.button}>{props.name}</button>
    )
}