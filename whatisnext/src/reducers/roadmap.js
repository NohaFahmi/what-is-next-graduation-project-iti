
export const roadmap = (state={}, action) => {
    console.log('ACTION', action);

    if(action.type === 'GET_ROADMAP') {
        return {...state, steps: action.payload}
    }

    return {...state}
}