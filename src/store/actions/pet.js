import { petTypes } from "../actionTypes"

export const registerPetRequested = ( name, species, sex, size, age, temperment, health, diseases, conditions, time, about, ownerID, image ) => ({
    type: petTypes.REGISTER_REQUESTED,
    payload: { name, species, sex, size, age, temperment, health, diseases, conditions, time, about, ownerID, image }
})
export const registerPetSucceeded = () => ({
    type: petTypes.REGISTER_SUCCEEDED,
})
export const registerPetFailed = () =>({
    type: petTypes.REGISTER_FAILED
})

export const listPetsRequested = (page, limit, userID) => ({
    type: petTypes.LIST_REQUESTED,
    payload: { page, limit, userID }
})
export const listPetsSucceeded = (petList) => ({
    type: petTypes.LIST_SUCCEEDED,
    payload: { petList }
})
export const listPetsFailed = () =>({
    type: petTypes.LIST_FAILED
})

export const loadPetRequested = (petID) => ({
    type: petTypes.LOAD_REQUESTED,
    payload: { petID }
})
export const loadPetSucceeded = (pet) => ({
    type: petTypes.LOAD_SUCCEEDED,
    payload: { pet }
})
export const loadPetFailed = () =>({
    type: petTypes.LOAD_FAILED
})

export const adoptPetRequested = (petID, ownerID) => ({
    type: petTypes.ADOPT_REQUESTED,
    payload: { petID, ownerID }
})
export const adoptPetSucceeded = (pet) => ({
    type: petTypes.ADOPT_SUCCEEDED,
    payload: { pet }
})
export const adoptPetFailed = () =>({
    type: petTypes.ADOPT_FAILED
})

export const clearPets = () => ({
    type: petTypes.CLEAR
})