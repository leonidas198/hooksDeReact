import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContex/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('pruebas en MainApp', () => { 

    test('debe mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter> 
                     
        );

        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();
        //screen.debug();
        
    });
    test('debe mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter> 
                     
        );

        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();
        //screen.debug();
        
    });
    

 })