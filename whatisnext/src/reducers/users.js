export const users = (state={}, action) => {
    console.log("ACTION", action);

    switch(action.type) {        
        case 'ADD_USER' : {
            return {...state}
        }

        default: {
            return state;
        }
    }

}