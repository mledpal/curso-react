/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */

import { getHeroesByOwner, getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas con el fichero 08-imp-exp.test.js', () => { 

    test('Debe devolver un héroe según el ID', () => {

        const heroe = getHeroeById(2);
        
        const heroeData = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        expect(heroe).toEqual(heroeData);
    });

    test('No debe devolver nada con un ID inexistente', () => {
        const heroe = getHeroeById(10);
        
        const heroeData = undefined;

        expect(heroe).toBeFalsy();
    });


    test('Debe devolver un array con los héroes de DC', () => { 
        const heroesDC = getHeroesByOwner('DC');
        const numHeroesDC = 3;

        const listaHeroesDC = [    
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },    
        ]

        expect(heroesDC.length).toBe(numHeroesDC);
        expect(getHeroesByOwner('DC')).toEqual(listaHeroesDC);
        expect(getHeroesByOwner('DC')).toEqual( heroes.filter( (heroe) => heroe.owner === 'DC' ));
    });

    test('Debe devolver un array con los héroes de Marvel', () => { 
        const heroes = getHeroesByOwner('Marvel');
        const numHeroesMarvel = 2;
        const listaHeroesMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];

        expect(heroes.length).toBe(numHeroesMarvel);
        expect(getHeroesByOwner('Marvel')).toEqual(listaHeroesMarvel);
        expect(getHeroesByOwner('Marvel')).toEqual( heroes.filter( (heroe) => heroe.owner === 'Marvel' ));
    });

});


