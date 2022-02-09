const INITIAL_STATE = {
    isSearchOpen: false,
    searchFriendResult: []
}

const GlobalReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'TOGGLE_SEARCH': {
            return {
                ...state,
                isSearchOpen: !state.isSearchOpen,
            }
        }
        case 'SET_SEARCH_FRIEND_RESULT': {
            return {
                ...state,
                searchFriendResult: action.payload
            }
        }
        default:
            return state
    }
}

export default GlobalReducer