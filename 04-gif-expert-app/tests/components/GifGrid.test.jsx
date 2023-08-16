import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');


describe('Probando el componente GifGrid', () => {
    const category = 'Bola de Dragón';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando . . .'));
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/goku.jpg',
                title: 'Goku'
            },
            {
                id: '123',
                url: 'https://localhost/fernandoalonso.jpg',
                title: 'Fernando Alonso'
            }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
});

