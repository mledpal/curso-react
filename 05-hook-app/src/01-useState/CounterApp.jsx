import { useState } from "react";

export const CounterApp = () => {
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = state;

	const increment = () => {
		setCounter({
			...state,
			counter1: counter1 + 1,
		});
	};

	const decrement = () => {
		setCounter({
			...state,
			counter1: counter1 - 1,
		});
	};

	const reset = () => {
		setCounter({
			counter1: 10,
			counter2: 20,
			counter3: 30,
		});
	};

	return (
		<>
			<h1>Counter1 : {counter1} </h1>
			<h1>Counter2 : {counter2} </h1>
			<h1>Counter3 : {counter3} </h1>
			<hr />

			<button onClick={increment} className='btn btn-primary'>
				+1
			</button>

			<button onClick={reset} className='btn btn-secondary'>
				Reset
			</button>

			<button onClick={decrement} className='btn btn-secondary'>
				-1
			</button>
		</>
	);
};
