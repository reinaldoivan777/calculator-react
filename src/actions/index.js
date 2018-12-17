export const addElem = (text) => {
    return {
        type: 'ADD_ELEM',
        text
    }
}

export const clear = () => {
    return {
        type: 'CLEAR',
    }
}

export const equal = (value) => {
    return {
        type: 'EQUAL',
        value
    }
}