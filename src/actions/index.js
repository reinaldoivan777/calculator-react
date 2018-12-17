export const addElem = (text) => {
    return {
        type: 'ADD_ELEM',
        text
    }
}

export const addOperator = (text) => {
    return {
        type: 'ADD_OPERATOR',
        text
    }
}

export const negate = () => {
    return {
        type: 'NEGATE'
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