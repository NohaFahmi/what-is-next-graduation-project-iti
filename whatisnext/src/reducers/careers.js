export const careers = (state={}, action) => {
    console.log('ACTION', action);

    if(action.type === 'GET_CAREERS') {
        return {...state, listOfCareers: action.payload}
    } else if(action.type === 'GET_TRACKS') {
        return {...state, tracks: action.payload.career[0].track}
    }

    return {...state}
}