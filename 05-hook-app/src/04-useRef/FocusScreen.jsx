import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                name="nombre"
                placeholder="Su nombre"
                className="form-control p-2 w-100 m-2"
            />

            <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                className="form-control p-2 w-100 m-2"
            />

            <button
                className="btn btn-outline-primary mt-5 w-100"
                onClick={handleClick}
            >
                Set Focus
            </button>
        </>
    )
}