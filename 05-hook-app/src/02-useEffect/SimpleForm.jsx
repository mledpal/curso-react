import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "Miguel",
		email: "info@fpvenjaen.es",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log("useEffect llamado");
	}, []);

	useEffect(() => {
		// console.log("Formulario cambiado");
	}, [formState]);

	useEffect(() => {
		// console.log("Email cambiado");
	}, [email]);

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='email'
				className='form-control mt-2'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onInputChange}
			/>

			{username === "migueldj" && <Message />}
		</>
	);
};
