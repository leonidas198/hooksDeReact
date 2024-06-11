import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";


describe('pruebas en useForm', () => {

    const initialForm = {
        name: 'Julian',
        email: 'juli@gmail.com',
    }

    test('debe regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) );
        expect( result.current ).toEqual( {
            
              name: initialForm.name,
              email: initialForm.email,
              formState: initialForm,
              onInputChange: expect.any( Function ),
              onResetForm: expect.any( Function ),
            
          });

    });

    test('debe cambiar el nombre del formulario', () => {
        
        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange( { target: { name: 'name', value: newValue } } );
        } )
        expect( result.current.name ).toBe('Juan');
        expect( result.current.formState.name ).toBe('Juan');

    });
    
    test('debe resetear el nombre del formulario', () => {
        
        const newValue = 'Juan';

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange( { target: { name: 'name', value: newValue } } );
            onResetForm();
        } )
        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });
    
    
    
});

