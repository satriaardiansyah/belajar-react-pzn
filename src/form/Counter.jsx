import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    console.info(`Counter: ${counter}`);

    function handleClick() {
        setCounter(counter + 3);
        // setCounter((c) => c + 1);
        // setCounter((c) => c + 1);
        //masih 0, nilai 3 akan dihitung setelah render selesai
        console.log(counter);
    }
    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <h1>Counter: {counter}</h1>
        </div>
    )
}