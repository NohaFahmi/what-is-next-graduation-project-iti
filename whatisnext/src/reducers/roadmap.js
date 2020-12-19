
export const roadmap = (state={}, action) => {
    console.log('ACTION', action);

    if(action.type === 'GET_ROADMAP') {
        return {...state, steps: action.payload['1']['0']}
    }
    //  else if (action.type === 'GET_RESOURCES') {
    //     return {...state, resources: action.payload}
    // }

    return {...state}
}