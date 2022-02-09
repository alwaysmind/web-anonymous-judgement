const INITIAL_STATE = {
    user: {}
}

const UserReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    switch(action.type) {
        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default UserReducer