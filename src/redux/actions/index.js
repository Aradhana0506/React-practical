import {SET_USER, EDIT_USER, UPDATE_USER, CLEAR_EDIT_USER, DELETE_USER, RESTORE_USER} from '../constants'

export const createUser = (user) => ({
    type: SET_USER,
    payload: user,
})

export const editUser = (id) => ({
    type: EDIT_USER,
    payload: id,
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
})

export const clearEditUser = () => ({
    type: CLEAR_EDIT_USER
})

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
})

export const restoreUser = (id) => ({
    type: RESTORE_USER,
    payload: id,
})