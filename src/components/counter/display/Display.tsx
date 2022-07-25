import s from "./Display.module.css"

type DisplayPropsType = {
    number: number;
    text: string;
    choice: boolean;
    max: number;
}
export const Display = (props: DisplayPropsType) => {
    let display = `${s.display} ${!props.choice ? s.large : ""} ${props.number === props.max ? s.red : ""} `
    return (
        <div className={display}>
            {props.choice ? props.number : props.text}
        </div>
    )
}