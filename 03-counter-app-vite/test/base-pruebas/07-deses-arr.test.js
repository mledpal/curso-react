/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {

        const [letras, numeros ] = retornaArreglo(); // ['ABC', 123]

        expect( letras ).toEqual( expect.any( String ) );
        expect( letras.length ).toBe( 3 );

        expect ( numeros ).toEqual( expect.any( Number ));        
        expect ( numeros < 125 ).toBe( true );

    });

});