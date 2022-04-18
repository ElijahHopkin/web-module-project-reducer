export const ADD_ONE = "ADD_ONE";
export const CHANGE_OPERATION = 'CHANGE_OPERATION'
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const APPLY_NUMBER = "APPLY_NUMBER";
export const SET_MEMORY = 'SET_MEMORY'
export const MEMORY_RESET = 'MEMORY_RESET'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({type: CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const setMemory =() => {
    return ({type: SET_MEMORY})
}

export const memoryReset= () => {
    return({type: MEMORY_RESET})
}