import { SET_USER, EDIT_USER, UPDATE_USER, CLEAR_EDIT_USER, DELETE_USER, RESTORE_USER } from '../constants'

const initialState = {
    users: [],
    error: null,
    loading: false,
    editUser: {},
    deletedUsers: [],
}


const UserReducer = function(state=initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }

        case EDIT_USER:
            return {
                ...state,
                editUser: state.users.find(user => user.id === action.payload)
            }

        case UPDATE_USER:
            const newUsers = state.users.map(user => user.id === action.payload.id ? action.payload : user);
            return {
                ...state,
                users: newUsers,
                editUser: {},
            }

        case CLEAR_EDIT_USER:
            return {
                ...state,
                editUser: {},
            }

        case DELETE_USER:
            const newDeletedUser = state.users.find(user => user.id === action.payload);
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                deletedUsers: [newDeletedUser, ...state.deletedUsers]
            }

        case RESTORE_USER:
            const newUser = state.deletedUsers.find(user => user.id === action.payload)
            return {
                ...state,
                deletedUsers: state.deletedUsers.filter(user => user.id !== action.payload),
                users: [newUser, ...state.users],
            }

        default:
            return state
    }
}

export default UserReducer;