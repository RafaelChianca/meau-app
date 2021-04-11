import { profileTypes } from "../actionTypes"

const INITIAL_STATE = {
    error: false,
    loading: false,
    user: {},
}
// rDpa9wiM6cPx6knxHUhfGRVzqG23
function profile (state = INITIAL_STATE, action) {

    switch(action.type){

        case profileTypes.LOGIN_REQUESTED:
            return {...state, loading: true }
        case profileTypes.LOGIN_SUCCEEDED:
            return {...state, error: false, loading: false }
        case profileTypes.LOGIN_FAILED:
            return {...state, error: true, loading: false }
        case profileTypes.LOAD_REQUESTED:
            return {...state, loading: true }
        case profileTypes.LOAD_SUCCEEDED:
            return {...state, error: false, loading: false, user: action.payload.user }
        case profileTypes.LOAD_FAILED:
            return {...state, error: true, loading: false }
        case profileTypes.LOGOUT_REQUESTED:
            return {...state, loading: true }
        case profileTypes.LOGOUT_SUCCEEDED:
            return INITIAL_STATE
        case profileTypes.LOGOUT_FAILED:
            return {...state, error: true, loading: false }
        case profileTypes.CLEAR:
            return INITIAL_STATE
        default:
            return state;
    }
}

export default profile;
