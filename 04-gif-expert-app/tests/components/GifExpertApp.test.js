import { render, screen, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe("Pruebas en <GifExpertApp />", () => {

    const category = 'Espinete';

    test("debe de mostrarse correctamente", () => {

        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(screen.getByText('Dragon Ball')).toBeTruthy();
        expect(screen.getByText('Cargando . . .')).toBeTruthy();

    });

    test('Debe mostrar gifs de una nueva categoria', () => {

        const { result } = renderHook(() => GifExpertApp());
        console.log(result);

        const { categories, setCategories } = result.current;


        setCategories(category);

        expect(categories).toEqual([category]);


    });
});