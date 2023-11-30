import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	const userLogin = {
		id: 1,
		name: 'Miguel Ledesma Palacios',
		email: 'migledpal@gmail.com'
	}

	return (
		<>
			<h1>Login Page</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button className='btn btn-primary'
				onClick={() => setUser(userLogin)}
			>Establecer usuario</button>
		</>
	);
};
