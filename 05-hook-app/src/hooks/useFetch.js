import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        try {
            const rep = await fetch(url)
            const data = await rep.json()
            setState({
                data,
                isLoading: false,
                hasError: false,

            })

        } catch (error) {
            setState({
                ...state,
                hasError: true,
                isLoading: false,
            })
        }
    }

    useEffect(() => {
        getFetch();
    }, [url]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}