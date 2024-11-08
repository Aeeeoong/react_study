import React, {useState} from "react";

function useCounter(initalValue) {
    const [count, setCount] = useState(initalValue)
    const [total, setTotal] = useState(0)

    const increaseCount = () => {
        setCount((count) => count + 1);
        setTotal((total) => total + 1);
    }
    const decreaseCount = () => {
        setCount((count) => Math.max(0,count-1));
    }

    return [count, increaseCount, decreaseCount, total]
}

export default useCounter
