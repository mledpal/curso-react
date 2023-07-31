import PropTypes from 'prop-types';

const getSaludo = (nombre) =>  'Hola '+ nombre

export const FirstApp = ( { titulo, subtitulo, nombre } ) => {

    // if(!titulo) {
    //     throw new Error('El título no existe');
    // }

    return (
        <>
        <h1>{ getSaludo('Miguel') }</h1>
        {/* <code>{ JSON.stringify (newMessage) }</code> */}
        <p>{ titulo }</p>
        <p>{ subtitulo }</p>
        <p>{ nombre }</p>
        </>
    );
}

FirstApp.propTypes = {
    nombre: PropTypes.string,
    subtitulo: PropTypes.number,
    titulo: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    nombre: 'Miguel Ledesma',
    subtitulo: 0,
    titulo : 'No hay título',
}