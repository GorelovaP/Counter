import s from "./ButtunArea.module.css"
import {UniversalButton} from "../../universalButton/UniversalButton";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";

type ButtonAreaPropsType = {
    Inc: () => void;
    Reset: () => void
    choice: boolean;
}
export const ButtonArea = (props: ButtonAreaPropsType) => {
    const minBorder = useSelector<AppRootStateType, number>(state => state.counter.minBorder)
    const maxBorder = useSelector<AppRootStateType, number>(state => state.counter.maxBorder)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currenValue)

    return (
        <div className={s.buttonArea}>
            <UniversalButton boolean={currentValue >= maxBorder || !props.choice} name={"inc"} callback={props.Inc}/>
            <UniversalButton boolean={!props.choice || minBorder === currentValue} name={"reset"}
                             callback={props.Reset}/>
        </div>
    )
}