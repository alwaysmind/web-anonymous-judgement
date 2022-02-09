const INITIAL_STATE = {
    friendPosts: []
}

const PostReducer = (state: any = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case "SET_FRIEND_POSTS": {
            return {
                ...state,
                friendPosts: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default PostReducer