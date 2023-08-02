/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Probando Async/Await', () => { 
    test('getImagen debe devolver una imagen', async() => {

        const url = await getImagen();        
        expect(typeof url).toBe('string');
    });
});