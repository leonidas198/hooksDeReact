import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";


jest.mock('../../../hooks/useFetch');

describe('pruebas en MultipleCustomHooks', () => { 

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,

        });

        render( <MultipleCustomHooks /> )

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('Informacion de pokemon') );

        const nextButton = screen.getByRole('button', { name: 'Anterior' });
        expect( nextButton ).toBeTruthy();

        //screen.debug();
        
    });

    /* test('debe mostrar un sprites', () => {

        useFetch.mockReturnValue({
            data: [{ sprites: [  ], name: 'juli' }],
            isLoading: false,
            hasError: false,

        });

        render( <MultipleCustomHooks /> );
        screen.debug();
        
    }); */
    
    test('debe llamar la funcion incrementar', () => {
        
        
    });
    
    

 })
