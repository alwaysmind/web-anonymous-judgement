const INITIAL_STATE = {
    user: {},
    friends: []
}

const UserReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    switch(action.type) {
        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }
        case "SET_FRIENDS": {
            return {
                ...state,
                friends: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default UserReducer