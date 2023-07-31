/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en el archivo 05-funciones.test.js', () => { 
    test('toEqual', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    })

    
    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Miguel';

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo( name );

        expect( testUser ).toStrictEqual( user );


    });
    


});