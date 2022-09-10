import React from 'react';
import './App.css';
import {SuperCounter} from "./components/counter2/SuperCounter";
import {Provider} from "react-redux";
import {store} from "./state/store";


function App() {

    return (
        <div className="App">
            <Provider store={store}> <SuperCounter/></Provider>
        </div>
    );
}

export default App;
