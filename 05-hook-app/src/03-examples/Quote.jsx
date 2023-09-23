import { PropTypes } from 'prop-types';

export const Quote = ({ quote, character, image}) => {

    

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={character} />
            <h2>{character}</h2>
            <p>{quote}</p>
        </div>
    );
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}