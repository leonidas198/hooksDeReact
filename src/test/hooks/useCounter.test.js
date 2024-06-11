const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../hooks/useCounter");



describe('Pruebas en el useCounter', () => {

    

    test('debe retornar los valores por defecto', () => {

                
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment,  reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
       
        expect( result.current.counter ).toBe(100);
      
    });

    test('debe incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        } );
        expect( result.current.counter ).toBe(13);
    });

    test('debe disminuir el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        } );
        expect( result.current.counter ).toBe(7);
    });

    test('debe resetear el contador', () => {

        const { result } = renderHook( () => useCounter(1) );
        const { reset } = result.current;

        act( () => {
            reset();
            
        } );
        expect( result.current.counter ).toBe(1);
    });

    
    
    
});
