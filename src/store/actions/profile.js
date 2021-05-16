import { profileTypes } from "../actionTypes"

export const createUserRequested = ( name, email, username, password, age, state, city, phone, image ) => ({
    type: profileTypes.CREATE_REQUESTED,
    payload: { name, email, username, password, age, state, city, phone, image }
})
export const createUserSucceeded = (user) => ({
    type: profileTypes.CREATE_SUCCEEDED,
    payload: { user }
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

export const loadNotificationsRequested = (userID) => ({
    type: profileTypes.LOAD_NOTIFICATIONS_REQUESTED,
    payload: { userID },
})
export const loadNotificationsSucceeded = (notifications) => ({
    type: profileTypes.LOAD_NOTIFICATIONS_SUCCEEDED,
    payload: { notifications }
})
export const loadNotificationsFailed = () => ({
    type: profileTypes.LOAD_NOTIFICATIONS_FAILED
})

export const sendTextNotificationRequested = (targetID, body) => ({
    type: profileTypes.SEND_TEXT_NOTIFICATION_REQUESTED,
    payload: { targetID, body },
})
export const sendTextNotificationSucceeded = () => ({
    type: profileTypes.SEND_TEXT_NOTIFICATION_SUCCEEDED
})
export const sendTextNotificationFailed = () => ({
    type: profileTypes.SEND_TEXT_NOTIFICATION_FAILED
})

export const clearNotificationsRequested = (notificationIDs, targetID, adopter, petID) => ({
    type: profileTypes.CLEAR_NOTIFICATIONS_REQUESTED,
    payload: { notificationIDs, targetID, adopter, petID },
})
export const clearNotificationsSucceeded = () => ({
    type: profileTypes.CLEAR_NOTIFICATIONS_SUCCEEDED
})
export const clearNotificationsFailed = () => ({
    type: profileTypes.CLEAR_NOTIFICATIONS_FAILED
})

export const clearProfile = () => ({
    type: profileTypes.CLEAR
})