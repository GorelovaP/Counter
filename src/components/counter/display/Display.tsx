import s from "./Display.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";

type DisplayPropsType = {
    text: string;
    choice: boolean;
    valueError: boolean;
    negative: boolean;
}
export const Display = (props: DisplayPropsType) => {
    const maxBorder = useSelector<AppRootStateType, number>(state => state.counter.maxBorder)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currenValue)

    let display = `${s.display}
     ${!props.choice ? s.large : ""} 
     ${currentValue === maxBorder ? s.red : ""}
     ${props.valueError ? "" : s.red}
     ${props.negative ? s.red : ""}`

    return (
        <div className={display}>
            {props.choice ? currentValue : props.text}
        </div>
    )
}