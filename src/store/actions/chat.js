import { chatTypes } from "../actionTypes"

export const listChatsRequested = ( userID ) => ({
    type: chatTypes.LIST_REQUESTED,
    payload: { userID }
})
export const listChatsSucceeded = ( chatList ) => ({
    type: chatTypes.LIST_SUCCEEDED,
    payload: { chatList }
})
export const listChatsFailed = () =>({
    type: chatTypes.LIST_FAILED
})

export const createChatRequested = ( users ) => ({
    type: chatTypes.CREATE_CHAT_REQUESTED,
    payload: { users }
})
export const createChatSucceeded = () => ({
    type: chatTypes.CREATE_CHAT_SUCCEEDED,
})
export const createChatFailed = ( users ) =>({
    type: chatTypes.CREATE_CHAT_FAILED,
    payload: { users }
})

export const updateChatRequested = ( chatID, lastMessage ) => ({
    type: chatTypes.UPDATE_REQUESTED,
    payload: { chatID, lastMessage }
})
export const updateChatSucceeded = () => ({
    type: chatTypes.UPDATE_SUCCEEDED,
})
export const updateChatFailed = () =>({
    type: chatTypes.UPDATE_FAILED
})

export const deleteChatRequested = ( chatID ) => ({
    type: chatTypes.DELETE_CHAT_REQUESTED,
    payload: { chatID }
})
export const deleteChatSucceeded = () => ({
    type: chatTypes.DELETE_CHAT_SUCCEEDED,
})
export const deleteChatFailed = () =>({
    type: chatTypes.DELETE_CHAT_FAILED
})

export const clearChar = () => ({
    type: chatTypes.CLEAR
})