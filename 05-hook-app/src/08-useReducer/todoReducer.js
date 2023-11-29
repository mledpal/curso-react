import { ACCION } from "./variables";
export const todoReducer = (initialState = [], action = {}) => {
	switch (action.type) {
		case ACCION.add:
			return [...initialState, action.payload];

		case ACCION.delete:
			return initialState.filter((todo) => todo.id !== action.payload);

		case ACCION.done:
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});

		default:
			return initialState;
	}

	return StaticRange;
};
