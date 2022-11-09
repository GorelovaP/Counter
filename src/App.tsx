import React, {useEffect} from 'react';
import './App.css';
import {SuperCounter} from "./components/counter2/SuperCounter";
import { useDispatch} from "react-redux";
import {AppDispatch} from "./state/store";
import {getFromLocalStorageTC} from "./state/counter-reducer";


function App() {
    let dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getFromLocalStorageTC())
    }, [])

    return (
        <div className="App">
            <SuperCounter/>
        </div>
    );
}

export default App;
