const initialState = {value:0, result: 0}

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ELEM': 
            return {
                ...state, value: state.value == 0 ? action.text : state.value + action.text
            }
        case 'CLEAR': 
            return {
                ...state, value: 0, result: 0
            }
        case 'EQUAL': 
            return {
                ...state, result: eval(action.value)
            }
        default: 
            return state
    }
}

export default calcReducer