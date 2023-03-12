import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"


const initValue = {
    todo: [],
    isLoading: false,
    isError: false
}

export const todoReducer = (state = initValue, { type, payload }) => {

    switch (type) {
        case GET_TODO_REQUEST:
            return { ...state, isLoading: true }
        case GET_TODO_SUCCESS:
            return { ...state, isLoading: false, todo: payload }
        case GET_TODO_FAILURE:
            return { ...state, isError: true, isLoading: false }
        default:
            return state
    }

}