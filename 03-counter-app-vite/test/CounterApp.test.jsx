/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas con el componente CounterAPP', () => { 

    const valor = 100;

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={ valor } />);
        expect(container).toMatchSnapshot();   
    });

    test('Debe mostrar el valor por defecto de 100', () => { 

        render(<CounterApp value ={ valor } />);
        expect(screen.getByText(valor)).toBeTruthy();       
        // expect(screen.getByRole('heading', { level : 2 }).innerHTML).toContain(`${valor}`);
    });


    test('Debe incrementar con el boton +1', () => { 
        render(<CounterApp value ={ valor } />);
        
        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${valor + 1}`);
        
    });

    test('Debe decrementar con el boton -1', () => { 
        render(<CounterApp value ={ valor } />);
        
        fireEvent.click(screen.getByText('-1'));

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${valor -1 }`);

    });

    test('Debe resetear el valor con el boton reset', () => {
        render(<CounterApp value ={ valor } />);
        
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));

        fireEvent.click(screen.getByRole('button', { name: 'btnReset' }));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${valor}`);
    });

});