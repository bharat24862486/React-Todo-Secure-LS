import { LoginError, LoginRequest, LoginSuccess, Logout } from "./actionType";

const initValue = {
    token: '',
    isLoading: false,
    isError: false,
    LoginStatus: false
}

export const loginReducer = (state = initValue, { type, payload }) => {
    switch (type) {
        case LoginRequest:
            return { ...state, isLoading: true }
        case LoginSuccess:
            return { ...state, isLoading: false, token: payload, LoginStatus: true }
        case LoginError:
            return { ...state, isLoading: false, isError: true }
        case Logout:
            return { ...state, LoginStatus: false }
        default:
            return state
    }
}