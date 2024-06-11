import { todoReducer } from "../../08-useReducer/todoReducer";


describe('pruebas en todoReducer', () => { 

    const inititalState = [{
        id: 1, 
        description: 'Demo TODO',
        done: false,
    }];

    test('debe regresar el estado inicial', () => {
        
       const newState = todoReducer( inititalState, {} );
       expect( newState ).toBe( inititalState ); 

    });

    test('debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        };

        const newState = todoReducer( inititalState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
                
    });

    test('debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        };

        const newState = todoReducer( inititalState, action );
        expect( newState.length ).toBe( 0 ); 
        
    });

    test('debe realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };

        const newState = todoReducer( inititalState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
        
        
    });
    
    
    
    

 })