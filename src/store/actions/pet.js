import { petTypes } from "../actionTypes"

export const registerPetRequested = ( name, species, sex, size, age, temperment, health, diseases, conditions, time, about, owner, image ) => ({
    type: petTypes.REGISTER_REQUESTED,
    payload: { name, species, sex, size, age, temperment, health, diseases, conditions, time, about, owner, image }
})
export const registerPetSucceeded = () => ({
    type: petTypes.REGISTER_SUCCEEDED,
})
export const registerPetFailed = () =>({
    type: petTypes.REGISTER_FAILED
})

export const deletePetRequested = ( petID ) => ({
    type: petTypes.DELETE_REQUESTED,
    payload: { petID }
})
export const deletePetSucceeded = () => ({
    type: petTypes.REGISTER_SUCCEEDED,
})
export const deletePetFailed = () =>({
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

export const adoptPetRequested = (pet, requestingUser) => ({
    type: petTypes.ADOPT_REQUESTED,
    payload: { pet, requestingUser }
})
export const adoptPetSucceeded = (pet) => ({
    type: petTypes.ADOPT_SUCCEEDED,
    payload: { pet }
})
export const adoptPetFailed = () =>({
    type: petTypes.ADOPT_FAILED
})

export const acceptAdoptionRequested = (oldOwnerID, newOwner, petID) => ({
    type: petTypes.ACCEPT_ADOPTION_REQUESTED,
    payload: { oldOwnerID, newOwner, petID }
})
export const acceptAdoptionSucceeded = () => ({
    type: petTypes.ACCEPT_ADOPTION_SUCCEEDED
})
export const acceptAdoptionFailed = () => ({
    type: petTypes.ACCEPT_ADOPTION_FAILED
})

export const declineAdoptionRequested = (oldOwnerID, newOwner, petID) => ({
    type: petTypes.DECLINE_ADOPTION_REQUESTED,
    payload: { oldOwnerID, newOwner, petID }
})
export const declineAdoptionSucceeded = () => ({
    type: petTypes.DECLINE_ADOPTION_SUCCEEDED
})
export const declineAdoptionFailed = () => ({
    type: petTypes.DECLINE_ADOPTION_FAILED
})

export const clearRefresh = () => ({
    type: petTypes.CLEAR_REFRESH
})

export const clearPets = () => ({
    type: petTypes.CLEAR
})