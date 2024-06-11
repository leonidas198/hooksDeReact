import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContex/context/UserContext";

import { LoginPage } from "../../09-useContex/LoginPage";


describe('Pruebas en LoginPage', () => { 

    const setUser = {
        id: 1,
        name: 'juli',
        email: 'juli@gmail.com'
    }

    
    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe( 'null' );
        //screen.debug();
        
    });

    test('debe llamar el setUser cuando se hace click', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByLabelText('button');
        fireEvent.click( buttonElement );
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({"email": "Julikun25@gmail.com", "id": 123, "name": "Juli"});


        
    });
    
    

 })