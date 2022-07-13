import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";


function App() {

    let [count, setCount] = useState<number>(0)
    const Inc = () => {
        setCount(count+1);
    }
    const Reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <Counter number={count} Reset={Reset} Inc={Inc}/>
        </div>
    );
}

export default App;
