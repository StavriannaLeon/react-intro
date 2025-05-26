import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("");

    const getCurrentTime = () => new Date().toLocaleTimeString() // returns time based on the browser's locale

    const increaseCount : () => void = () => {
        setCount(count + 1)
        setLastAction("Increase")
        setTime(getCurrentTime)
    }

    const decreaseCount : () => void = () => {
        if (count > 0) {
            setCount(count - 1)
            setLastAction("Decrease")
            setTime(getCurrentTime)
        }
    }

    const resetCount : () => void = () => {
        setCount(0)
        setLastAction("Reset")
        setTime(getCurrentTime)
    }

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase"/>
                    <CounterButton onClick={decreaseCount} label="Decrease" disabled={count === 0}/>
                    <CounterButton onClick={resetCount} label="Reset" disabled={count === 0} addClass="bg-custom-dark-red"/>
                </div>
            </div>
            <p className="text-center pt-8">Last action: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
        </>
    )
}

export default CounterWithMoreStates;