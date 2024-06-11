import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";



describe('pruebas en TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'piedra del agua',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() ); //Esta instruccion hace que al ejecutarse cada prueba se limpien las funciones!!

    test('Debe mostrar el Todo pendiente de completar', () => {
        
        render( <TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/> );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement)
        expect( liElement.className ).toBe('list-group-item d-flex\r justify-content-between');

        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        expect( spanElement.className ).toBe('align-self-center '); /* una forma de evaluar diferente con la cual hay que agregar el espacio */
        expect( spanElement.className ).toContain('align-self-center');//con esta no hace falta el espacio porque solo evalua que este ahi
        expect( spanElement.className ).not.toContain('text-decoration-line-through');//esta evalua que no contenga el texto ingresado como argumento

        //screen.debug();
    });

    test('Debe mostrar el Todo completado', () => {

        todo.done = true;
        
        render( <TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/> );

       

        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
       
        expect( spanElement.className ).toContain('text-decoration-line-through');//esta evalua que no contenga el texto ingresado como argumento

        //screen.debug();
    });

    test('el span debe llamar el ToggleTodo cuando se hace click', () => {

        render( <TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/> );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );/* el fireevent simula un evento en las pruebas. En este caso es el click
        */
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

    test('el button debe llamar el DeleteTodo cuando se hace click', () => {

        render( <TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/> );

        const buttonElement = screen.getByLabelText('button');
        fireEvent.click( buttonElement );/* el fireevent simula un evento en las pruebas. En este caso es el click
        */
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });
    
    

 })