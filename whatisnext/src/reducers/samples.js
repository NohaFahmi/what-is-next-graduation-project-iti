export const samples = (state={}, action) => {
    
    console.log("ACTION", action.type);

    switch(action.type) {        
        case 'ADD_SAMPLE' : {
            return {...state}
        }

        case 'GET_SAMPLES': {
            return {...state, samples: action.payload}
        }
        
        default: {
            return {...state};
        }
    }

}