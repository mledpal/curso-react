import PropTypes from 'prop-types';

export const FirstApp = ( { titulo, subtitulo, nombre } ) => {

    // if(!titulo) {
    //     throw new Error('El título no existe');
    // }

    return (
        <>
        {/* <code>{ JSON.stringify (newMessage) }</code> */}
        <h1 data-testid="test-title">{ titulo }</h1>                
        <p>{ subtitulo }</p>
        <p>{ subtitulo }</p>
        <p>{ nombre }</p>
        </>
    );
}

FirstApp.propTypes = {
    nombre: PropTypes.string,
    subtitulo: PropTypes.string,
    titulo: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    nombre: 'Miguel Ledesma',
    subtitulo: 'Subtitulo',
    titulo : 'No hay título',
}