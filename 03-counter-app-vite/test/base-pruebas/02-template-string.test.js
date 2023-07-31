/* eslint-disable no-undef */

import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe    ('Pruebas en el archivo 02-template-string.test.js', () => {

    test('getSaludo debe retornar Hola Miguel', () => {
        const name  = 'Miguel';
        const message = getSaludo(name);
        expect( message ).toBe(`Hola ${name}`);
    });
});