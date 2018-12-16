export const digitPressed = (number) => {
    return {
        type: 'DIGIT_PRESSED',
        digit: number
    }
}

export const operationPressed = (operation) => {
    return {
        type: 'OPERATION_PRESSED',
        operation: operation
    }
}

export const evaluationPressed = () => {
    return {
        type: 'EVALUATION_PRESSED',
        operation: '='
    }
}