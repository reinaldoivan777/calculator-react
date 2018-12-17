const initialState = {
    value:(localStorage.getItem('value') === null ? 0 : localStorage.getItem('value')), 
    result: (localStorage.getItem('result') === null ? 0 : localStorage.getItem('result'))
}

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ELEM': 
            return {
                ...state, value: state.value == 0 ? action.text : state.value + action.text
            }
        case 'ADD_OPERATOR': 
            if(state.value == 0) {
                if (action.text === "+" || action.text === "-") {
                    return {
                        ...state, value: state.value == 0 ? action.text : state.value + action.text
                    }
                }
                else {
                    return state
                }
            }
            else {
                let lastChar = state.value.charAt(state.value.length - 1)
                if((lastChar === "+") || (lastChar === "-") || (lastChar === "*") || (lastChar === "/")) {
                    return {
                        ...state, value: state.value.replace(/.$/, action.text)
                    }
                }
                else {
                    return {
                        ...state, value: state.value == 0 ? action.text : state.value + action.text
                    }
                }
            }
        case 'CLEAR': 
            localStorage.setItem('result', 0)
            localStorage.setItem('value', 0)
            return {
                ...state, value: 0, result: 0
            }
        case 'NEGATE':
            return {
                ...state, result: (state.result > 0) ? -state.result : Math.abs(state.result)
            }
        case 'EQUAL': 
            let hasil = eval(action.value)
            localStorage.setItem('result', hasil)
            localStorage.setItem('value', action.value)
            return {
                ...state, result: hasil
            }
        default: 
            return state
    }
}

export default calcReducer