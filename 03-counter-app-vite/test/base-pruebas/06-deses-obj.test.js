/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import  { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en desestructuración', () => {
    test('debe retornar un string y un número', () => { 

        const clave = 'Maverick';
        const rango = 'Capitán'; 
        const edad = 45;

        const testObj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            },
            rango : rango
        };

        const testUser = usContext({clave, edad, rango});

        expect( testObj ).toStrictEqual( testUser );

    });
});