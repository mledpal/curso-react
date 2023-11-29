import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { ACCION } from "../08-useReducer/variables";

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	const handleNewTodo = (todo) => {
		const action = {
			type: ACCION.add,
			payload: todo,
		};
		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		dispatch({
			type: ACCION.delete,
			payload: id,
		});
	};

	const handleToggleTodo = (id) => {
		dispatch({
			type: ACCION.done,
			payload: id,
		});
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo };
};
