import { useFetch, useCounter } from "../hooks";
import { Loading, Quote } from "../03-examples";

const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

export const Layout = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(URL, counter);
	const { quote, character, image } = !!data && data[0];

	return (
		<>
			<h1>Simpsons Random Quotes</h1>
			<h2>Frases leídas : {counter}</h2>
			<hr />
			{isLoading ? (
				<Loading />
			) : (
				<Quote quote={quote} character={character} image={image} />
			)}

			<button
				className='btn btn-primary'
				onClick={() => {
					increment();
				}}
			>
				Otra frase
			</button>
		</>
	);
};
