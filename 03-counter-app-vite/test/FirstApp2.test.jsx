/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { getAllByText, getByText, render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas con FirstApp', () => { 

    const titulo    = "Hola, soy Miguel";
    const subtitulo = "Hola, esto es un subtitulo";


    test('Debe hacer match con snapshot', () => {            
       const { container } = render(<FirstApp titulo={ titulo } />);
       expect(container).toMatchSnapshot();        
    });


    test('Debe mostrar el mensaje "Hola, soy Miguel" en un p', () => { 
        render(<FirstApp titulo={ titulo } />);
        expect(screen.getByText(titulo)).toBeTruthy();
    });


    test('Debe encontrar el titulo en un H1', () => { 
        render(<FirstApp titulo={ titulo } />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(titulo);
    });


    test('Debe mostrar el subtitulo enviado por props', () => { 
        
        render( 
            <FirstApp 
                titulo={ titulo } 
                subtitulo = { subtitulo }
            /> 
        );

        expect(screen.getAllByText(subtitulo).length).toBe(2);
    });
});