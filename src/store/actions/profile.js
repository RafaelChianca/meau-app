import { profileTypes } from "../actionTypes"

export const createUserRequested = ( name, email, username, password, age, state, city, phone ) => ({
    type: profileTypes.CREATE_REQUESTED,
    payload: { name, email, username, password, age, state, city, phone }
})
export const createUserSucceeded = () => ({
    type: profileTypes.CREATE_SUCCEEDED,
})
export const createUserFailed = () =>({
    type: profileTypes.CREATE_FAILED
})

export const loginRequested = (email, password) => ({
    type: profileTypes.LOGIN_REQUESTED,
    payload: { email, password }
})
export const loginSucceeded = () => ({
    type: profileTypes.LOGIN_SUCCEEDED,
})
export const loginFailed = () =>({
    type: profileTypes.LOGIN_FAILED
})

export const loadUserRequested = (email) => ({
    type: profileTypes.LOAD_REQUESTED,
    payload: { email },
})
export const loadUserSucceeded = (user) => ({
    type: profileTypes.LOAD_SUCCEEDED,
    payload: { user },
})
export const loadUserFailed = () => ({
    type: profileTypes.LOAD_FAILED
})

export const logOutRequested = () => ({
    type: profileTypes.LOGOUT_REQUESTED
})
export const logOutSucceeded = () => ({
    type: profileTypes.LOGOUT_SUCCEEDED
})
export const logOutFailed = () => ({
    type: profileTypes.LOGOUT_FAILED
})

export const clearProfile = () => ({
    type: profileTypes.CLEAR
})