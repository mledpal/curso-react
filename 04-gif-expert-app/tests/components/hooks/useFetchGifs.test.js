import { useFetchGifs } from '../../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Probando el hook useFetchGifs', () => {

    const category = 'Dragon Ball';

    test('Debe devolver el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe devolver un arreglo de imágenes y el isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0), { timeout: 3000 }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBe(10);
        expect(isLoading).toBeFalsy();


    });

});