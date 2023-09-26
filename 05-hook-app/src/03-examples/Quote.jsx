import { PropTypes } from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, character, image }) => {
	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [quote]);

	return (
		<>
			<blockquote
				style={{ display: "flex" }}
				className='card position-relative'
			>
				<img
					src={image}
					className='w-50 card-img-top img-rounded position-relative'
					alt={character}
				/>
				<h2>{character}</h2>
				<p ref={pRef}>{quote}</p>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	character: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};
