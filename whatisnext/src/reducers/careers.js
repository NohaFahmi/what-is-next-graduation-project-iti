export const careers = (state={}, action) => {
    console.log('ACTION', action);

    if(action.type === 'GET_CAREERS') {
        return {...state, careersList: action.payload}
    }
    //  else if(action.type === 'GET_INFORMATION') {
    //     return {...state, information: action.payload}
    // }

    return {...state}
}