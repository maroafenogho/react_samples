import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-white p-8 rounded shadow text-center">
            <h1 className="font-bold">Counter</h1>
            <p className="text-4xl font-bold">{count}</p>
            <div className="flex justify-center m-14">
                <button onClick={() => setCount((count) => count - 1)} className="m-5">-</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount((count) => count + 1)}>+</button>
            </div>
        </div>
    )
}