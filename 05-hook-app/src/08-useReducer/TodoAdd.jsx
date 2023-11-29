import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const onNewTodo = (event) => {
		event.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onNewTodo}>
			<input
				type='text'
				placeholder='¿Cual es la tarea?'
				className='form-control'
				name='description'
				value={description}
				onChange={onInputChange}
			></input>

			<button type='submit' className='btn btn-outline-primary mt-2'>
				Enviar
			</button>
		</form>
	);
};
