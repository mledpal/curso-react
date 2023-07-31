/* eslint-disable no-undef */

describe('Pruebas en el Componente Básico', () => {

    test('Test de igualdad', () => { 

        // 1. Arrange Inicialización
    
        const message1 = 'Hola Mundo';
    
        // 2. Act Acción
    
        const message2 = message1.trim();
        
        // 3. Assert Afirmación-Observación
    
        expect( message2 ).toBe( message1 );
    });

});

