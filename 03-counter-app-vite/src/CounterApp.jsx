import { useState } from  'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );

    const sumarContador = () => setCounter( counter + 1 );
    const restarContador = () => setCounter( counter - 1 );
    const resetContador = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter } </h2>
            <button onClick={ sumarContador }> +1 </button>
            <button onClick={ restarContador }> -1 </button>
            <button onClick={ resetContador }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}