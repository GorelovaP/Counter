import s from "./Display.module.css"

type DisplayPropsType = {
    number: number;
}
export const Display = (props: DisplayPropsType) => {
    let display = `${s.display} ${props.number === 5 ? s.red : ""}`
    return (
        <div className={display}>
            {props.number}
        </div>
    )
}