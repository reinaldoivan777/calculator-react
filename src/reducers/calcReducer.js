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
        case 'CLEAR': 
            localStorage.setItem('result', 0)
            localStorage.setItem('value', 0)
            return {
                ...state, value: 0, result: 0
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