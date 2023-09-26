import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
	const { formState, onInputChange, onFormReset, username, password, email } =
		useForm({
			username: "",
			email: "",
			password: "",
		});

	return (
		<form className='w-[800px]'>
			<h1>Form With Custom Hook</h1>
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

			<input
				type='password'
				className='form-control mt-2'
				placeholder='Contraseña'
				name='password'
				value={password}
				onChange={onInputChange}
				autoComplete='off'
			/>

			<button
				className='btn btn-primary mt-2 px-4 py-2 m-auto'
				onClick={(e) => {
					e.preventDefault();
					onFormReset();
				}}
			>
				Reset
			</button>
		</form>
	);
};
