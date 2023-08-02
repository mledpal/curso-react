/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { getAllByText, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas con FirstApp', () => { 

    // test('Debe hacer match con el snapshot', () => {       
    //     const titulo = 'Hola, soy Goku';
    //     const { container }  = render( <FirstApp titulo={ titulo } /> );
    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe mostrar el titulo en un h1', () => {
            
        const titulo = 'Hola, soy Goku';
        
        const { container, getByText, getByTestId  }  = render( <FirstApp titulo={ titulo } /> );
        expect( getByText(titulo) ).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(titulo);
        
        expect( getByTestId('test-title').innerHTML ).toBe(titulo);
        
    });

    test('Debe mostrar el subtitulo en un p', () => { 
        const titulo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
        
        const { getAllByText }  = render( 
            <FirstApp 
                titulo={ titulo } 
                subtitulo = { subtitulo }
            /> 
        );

        expect( getAllByText(subtitulo).length ).toBe(2);

    });
});