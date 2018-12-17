import { combineReducers } from "redux"
import CalculatorReducer from './calcReducer'

const rootReducer = combineReducers({
    calculator: CalculatorReducer
})

export default rootReducer