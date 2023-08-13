import { render, screen } from "@testing-library/react";
import { GridItem } from "../../src/components/GridItem";

describe('Probando GridItem', () => {

    const title = 'Esto es un titulo';
    const url = 'http://miurl.com/';

    test('Debe de mostrar el componente correctamente', () => {
        const { container } = render(<GridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el ALT y el SRC adecuado', () => {

        render(<GridItem url={url} title={title} />);
        const { src, alt } = screen.getByRole('img');

        // screen.debug();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el parrafo como un texto', () => {
        render(<GridItem url={url} title={title} />);
        expect(screen.getByText(title)).toBeTruthy();

    });

})