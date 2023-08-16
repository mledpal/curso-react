import { useState } from "react"

export function useCounter(initialValue = 10) {

    const [counter, setCounter] = useState(initialValue)

    function increment(value = 1) {
        if (counter === 100) return;
        setCounter(counter + value)
    }

    function decrement(value = 1) {
        if (counter === 0) return;
        setCounter(counter - value)
    }

    function reset() {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
