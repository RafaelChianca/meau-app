import { petTypes } from "../actionTypes"

const INITIAL_STATE = {
    error: false,
    loading: false,
    petList: [],
}

function pet (state = INITIAL_STATE, action) {

    switch(action.type){

        case petTypes.REGISTER_REQUESTED:
            return {...state, loading: true }
        case petTypes.REGISTER_SUCCEEDED:
            return {...state, error: false, loading: false }
        case petTypes.REGISTER_FAILED:
            return {...state, error: true, loading: false }
        case petTypes.LIST_REQUESTED:
            return {...state, loading: true }
        case petTypes.LIST_SUCCEEDED:
            return {...state, error: false, loading: false, petList: action.payload.petList }
        case petTypes.LIST_FAILED:
            return {...state, error: true, loading: false }
        case petTypes.LOAD_REQUESTED:
            return {...state, loading: true }
        case petTypes.LOAD_SUCCEEDED:
            return {...state, error: false, loading: false, pet: action.payload.pet }
        case petTypes.LOAD_FAILED:
            return {...state, error: true, loading: false }
        case petTypes.CLEAR:
            return INITIAL_STATE
        default:
            return state;
    }
}

export default pet;
