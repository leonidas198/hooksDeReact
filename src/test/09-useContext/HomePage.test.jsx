import { render, screen } from '@testing-library/react';
import { HomePage } from '../../09-useContex/HomePage';
import { UserContext } from '../../09-useContex/context/UserContext';



describe('Pruebas en HomePage', () => { 

    const user = {
        id: 1,
        name: 'Julian',
    }

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider> 
             
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe( 'null' );

        //screen.debug();
        
    });

    test('debe mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider> 
             
        );

        const smallTag = screen.getByLabelText('small');
        expect(smallTag.innerHTML).toBe( user.name );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain( user.id.toString() );

        //screen.debug();
        
    });
    

 })