import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs Fetch', () => {

    test('Debe devolver un array de gifs', async () => {

        const gifs = await getGifs('Bola de Dragón');
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    });

});