

export const todoReducer = ( inititalState = [],  action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [
                ...inititalState, action.payload
            ];
        case '[TODO] Remove Todo':
            return inititalState.filter( todo => todo.id !== action.payload );  
        
        case '[TODO] Toggle Todo':
            return inititalState.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }

                return todo;
            } );
                 
            
    
        default:
            return inititalState;
    }

}