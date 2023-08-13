import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku');

    });


    test('Debe de llamar el onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Goku';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamarse la funcion onNewCategory si el input esta vacio', () => {
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        expect(onNewCategory).not.toHaveBeenCalled();

    });

});