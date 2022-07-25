import s from "./ButtunArea.module.css"
import {UniversalButton} from "../../universalButton/UniversalButton";

type ButtonAreaPropsType={
    Inc: ()=> void;
    Reset: ()=> void
    number: number;
    choice: boolean;
    min: number;
    max: number;
}
export const ButtonArea =(props:ButtonAreaPropsType )=>{
    return(
        <div className={s.buttonArea}>
           <UniversalButton boolean={ props.number >= props.max || !props.choice } name={"inc"} callback={props.Inc}/>
           <UniversalButton boolean={!props.choice || props.min === props.number } name={"reset"} callback={props.Reset}/>
        </div>
    )
}