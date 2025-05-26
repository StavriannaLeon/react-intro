import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const CounterWithCustomHook = () => {

    // custom hook function
    const {count, increase, decrease, reset} = useCounter()

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label="Increase"/>
                    <CounterButton onClick={decrease} label="Decrease" disabled={count === 0}/>
                    <CounterButton onClick={reset} label="Reset" disabled={count === 0} addClass="bg-custom-dark-red"/>
                </div>
            </div>
            {/*<p className="text-center pt-8">Last action: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>*/}
        </>
    )
}

export default CounterWithCustomHook;