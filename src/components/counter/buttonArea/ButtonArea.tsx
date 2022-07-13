import s from "./ButtunArea.module.css"
import {UniversalButton} from "../../universalButton/UniversalButton";

type ButtonAreaPropsType={
    Inc: ()=> void;
    Reset: ()=> void
    number: number;
}
export const ButtonArea =(props:ButtonAreaPropsType )=>{
    return(
        <div className={s.buttonArea}>
           <UniversalButton boolean={props.number > 4} name={"inc"} callback={props.Inc}/>
           <UniversalButton boolean={props.number === 0} name={"reset"} callback={props.Reset}/>
        </div>
    )
}