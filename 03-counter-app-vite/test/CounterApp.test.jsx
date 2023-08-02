/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { CounterApp } from '../src/CounterApp';
import { getAllByText, getByText, render, screen } from '@testing-library/react';

describe('Pruebas con el componente CounterAPP', () => { 

    const valor = 100;

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={ valor } />);
        expect(container).toMatchSnapshot();   
    });

    test('Debe mostrar el valor por defecto de 100', () => { 
        render(<CounterApp value = { valor } />);
        expect(screen.getByText(valor)).toBeTruthy();       
    });

});