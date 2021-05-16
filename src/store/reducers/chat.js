import { chatTypes } from "../actionTypes"

const INITIAL_STATE = {
    error: false,
    loading: false,
    chatList: [],
}

function chat (state = INITIAL_STATE, action) {

    switch(action.type){
        case chatTypes.LIST_REQUESTED:
            return {...state, loading: true}
        case chatTypes.LIST_SUCCEEDED:
            return {...state, error: false, loading: false, chatList: action.payload.chatList}
        case chatTypes.LIST_FAILED:
            return {...state, error: true, loading: false}

        case chatTypes.CREATE_CHAT_REQUESTED:
            return {...state, loading: true}
        case chatTypes.CREATE_CHAT_SUCCEEDED:
            return {...state, error: false, loading: false}
        case chatTypes.CREATE_CHAT_FAILED:
            return {...state, error: true, loading: false}
        
        case chatTypes.UPDATE_REQUESTED:
            return {...state, loading: true}
        case chatTypes.UPDATE_SUCCEEDED:
            return {...state, error: false, loading: false}
        case chatTypes.UPDATE_FAILED:
            return {...state, error: true, loading: false}

        case chatTypes.DELETE_CHAT_REQUESTED:
            return {...state, loading: true}
        case chatTypes.DELETE_CHAT_SUCCEEDED:
            return {...state, error: false, loading: false}
        case chatTypes.DELETE_CHAT_FAILED:
            return {...state, error: true, loading: false}

        case chatTypes.CLEAR:
            return INITIAL_STATE
        default:
            return state;
    }
}

export default chat;
