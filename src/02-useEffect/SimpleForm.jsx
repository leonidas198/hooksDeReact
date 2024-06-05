import {useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'julian',
        email: 'quiquechavez7@gmail.com',
    });
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    useEffect( () => {
        //console.log('useEffect en accion');
    }, [] );
    
    useEffect( () => {
        //console.log('formState en accion');
    }, [formState] );

    useEffect( () => {
        //console.log('email en accion');
    }, [email] );

  


  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="quiquechavez7@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'julian2') && <Message/>
        }
    </>
  )
}
