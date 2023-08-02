/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas con promesas', () => { 
    
    test('Debe devolver un heroe' , ( done ) => {

        const id = 1;
        
        getHeroeByIdAsync( id )
            .then( hero => {
                expect ( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'});
                done();
            });
    });


    test('Debe devolver error si el heroe no existe' , ( done ) => {

        const id = 100;
        
        getHeroeByIdAsync( id )
            .then( hero => {
                expect ( hero ).toBeFalsy();
                done();
            })
            .catch( error => {
                expect ( error ).toBe(`No se pudo encontrar el héroe ${ id }`);
                done();
            });
    });
});